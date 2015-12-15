/**
* @category Common
* @package Booking_Common
* @author Vitaliy Pyatin <mail.pyvil@gmail.com>
*/
(function ($, window, document) {
    "use strict";

    var
        duration    = 500,
        value       = 0,
        current     = 0,
        distanse    = 80;

    /**
     *
     * @constructor
     */
    var Book = function () {
        this.type               = '';
        this.page               = 0;
        this.allPagesInstances  = $('.book').find('.page');
        this.currentPage        = $(this.allPagesInstances).first();
        this.pagesAmount        = $(this.allPagesInstances).size();
        this.soundIsStop        = false;


        this.sound              = new Music();

        // fire an action when sound was ended
        this.sound.song.on('end', function () {
            value += -distanse;
            $('.book').css("transition-duration", (duration / 1000).toFixed(1) + "s")
                .css("transform", "translate(" + value + "px,0)");
            value += distanse;
        });

        this.init();
    };

    /**
     *
     * @type {{prepareAligns: Function, prepareEvents: Function, init: Function, addPagesAttributes: Function, preparePages: Function, turnPage: Function}}
     */
    Book.prototype = {
        /**
         *
         */
        prepareAligns : function () {
            //this.centerOverlayInsideBox('.arrows', $('body'), 'top');
            this.centerOverlayInsideBox('#toggle-text', $('body'), 'left');
            this.centerOverlay($('.book'));
        },

        /**
         *
         */
        prepareEvents : function () {
            var self = this;
            /**
             * buttons on first page click
             */
            $(this.currentPage).find('.button').bind('click', function () {
                self.type = $(this).data('type');
                self.turnPage('next');
            });
            /**
             * resizing window
             */
            $(window).resize(function (e) {
                self.prepareAligns();
            });
            /**
             * left arrow click
             */
            $('#arrow-left').bind('click', function (e) {
                self.turnPage('prev');
            });
            /**
             * right arrow click
             */
            $('#arrow-right').bind('click', function (e) {
                self.turnPage('next');
            });
            /**
             * toggle text open/close
             */
            $('#toggle-text').bind('click', function (e) {
                $('.text_block').slideToggle();
                $(this).toggleClass('open');
            });
            /**
             *
             */
            $('#home').bind('click', function (e) {
                self.turnPage('home');
            });

            $('#sound').bind('click', function (e) {
                $(this).toggleClass('mute');
                if (self.soundIsStop)
                    self.sound.play((current).toString());
                else
                    self.sound.pause((current).toString());
                self.soundIsStop = !self.soundIsStop;
            });

            $('.page').swipe({
                swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
                    switch (direction) {
                        case 'right' :
                            self.turnPage('next');
                            break;

                        default :
                            self.turnPage('left');
                            break;
                    }
                },
                threshold: 75,
                triggerOnTouchEnd: true,
                allowPageScroll: "vertical"
            });
        },

        /**
         * initialize all needed features
         */
        init : function () {
            this.prepareAligns();
            this.preparePages();
        },

        /**
         *
         */
        addPagesAttributes : function () {
            var self = this;
            $.each(this.allPagesInstances, function (index, page) {
                $(page).attr('data-page', index);
                $(page).css('width', $(window).width());
                $(page).css('height', $(window).height());
                $(page).find('video').addClass(self.isMobile() ? 'mobile' : 'no-mobile');
            });
            $('.book').css('width', $('.page').width() * $('.page').size())
                      .css('transition-duration', '0.5s')
                      .css('transform', 'translate(0, 0)')
                      .css('height', $(window).height());
            $('body').css('width', $(window).width())
                     .css('height', $(window).height())
                     .css('overflow', 'hidden');
        },

        /**
         * Prepare pages by adding attributes
         */
        preparePages : function () {
            this.addPagesAttributes();
            this.prepareEvents();
        },

        /**
         * Turn page by passing direction
         * @param direction
         * @returns {boolean}
         */
        turnPage : function (direction) {
            current = parseInt($(this.currentPage).data('page'), 10);
            var currentPageInstance = this.currentPage;
            switch (direction) {
                case 'next' :
                    current++;
                    if (current == this.pagesAmount) return false;

                    this.currentPage = $(this.allPagesInstances).parent().find('[data-page="' + (current) + '"]');
                break;

                default :
                    current = direction == 'home' ? 0 : current - 1;
                    if ( current < 0 ) return false;

                    this.currentPage = $(this.allPagesInstances).parent().find('[data-page="' + (current) + '"]');
                break;
            }

            switch (direction) {
                case 'next' :
                    value += -(($('.page').width())/* - distanse*/);
                    if($(currentPageInstance).data('page') == 0) {
                        $('.controls').addClass('always-allow').removeClass('disallow');
                    }
                break;

                default :
                    value += (($('.page').width())/* + distanse*/);
                    if ($(this.currentPage).data('page') == 0) {
                        $('.controls').removeClass('always-allow').addClass('disallow');
                        this.addPagesAttributes();
                        this.type = '';
                        value = 0;
                    }
                break;
            }
            $('.book').css("transition-duration", (duration / 1000).toFixed(1) + "s")
                      .css("transform", "translate(" + value + "px,0)");

            $(currentPageInstance).removeClass('active');
            $(this.currentPage).addClass('active');

            if (this.type == 'voice') {
                this.sound.stop(current.toString());
                if (!this.soundIsStop)
                    this.sound.play((current).toString());
                $('#sound').show();
            } else {
                this.sound.stop(current.toString());
                $('#sound').hide();
            }
        }
    };

    $.extend(Book.prototype, Helper.prototype);

    /**
     * sent to a global scope
     * @type {Function|{}}
     */
    window.Book = Book || {};

    $(document).ready(function () {
        var book = new Book();
    });

} (jQuery, window, document));
