/**
 *
 * @constructor
 */
var Helper = {
    /**
     * Check device on mobile
     * @returns {boolean}
     */
    isMobile : function () {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        if (($(window).width() < 1024) && $(window).height() < 768) check = true;
        return check;
    },

    /**
     * Put block in the center of the screen
     * @param obj
     * @param type
     */
    centerOverlay : function(obj, type){
        type = ( (type == 'top') || (type == 'left') ) ? type : 'both';

        switch (type) {
            case 'top' :
                $(obj).css("top", Math.max(0, (($(window).height() - $(obj).outerHeight()) / 2)) + "px");
                break;

            case 'left' :
                $(obj).css("left", Math.max(0, (($(window).width() - $(obj).outerWidth()) / 2)) + "px");
                break;

            default :
                $(obj).css("top", Math.max(0, (($(window).height() - $(obj).height()) / 2)) + "px");
                $(obj).css("left", Math.max(0, (($(window).width() - $(obj).width()) / 2)) + "px");
                break;
        }
    }
};

/**
 *
 * @type {Function}
 */
var Bday = (function () {

    /**
     *
     * @type {{}}
     */
    var page        = {};

    /**
     *
     * @type {number}
     */
    var value       = 0;

    /**
     *
     * @type {number}
     */
    var index       = 0;

    /**
     *
     * @type {number}
     */
    var duration    = 500;

    var type = function(obj) {
        $(obj).find('.text').typed({
            // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
            strings: [$(obj).find('p').text().trim()],
            typeSpeed: 2
        });
    };

    /**
     *
     */
    this.prepare = function () {
        $('.slide').css({'width' : $(window).outerWidth(), 'height' : $(window).outerHeight()});
        $('.content').css('width', $('.slide').outerWidth() * $('.slide').size())
            .css('transition-duration', '0.5s')
            .css('transform', 'translate(0, 0)')
            .css('height', $(window).height());
        $('body').css('width', $(window).width())
            .css('height', $(window).height())
            .css('overflow', 'hidden');

        page = $('.slide:eq(0)');
        //$(page).find('.box').css('left', '32%').css('top', '45%');
        type(page);
    };

    this.sliding = function (direction) {
        switch  (direction) {
            case 'left' :
                    value += $('.slide').width();
                    index = index - 1;
                break;

            case 'right' :
                    value -= $('.slide').width();
                    index = index + 1;
                break;
        }
        $(page).find('.text').html('');
        $(page).find('.text').typed('reset');

        $('.content').css("transition-duration", (duration / 1000).toFixed(1) + "s")
            .css("transform", "translate(" + (value) + "px,0)");
        page = $('.slide:eq('+ index +')');
        //Helper.centerOverlay($(page).find('.box'));
        type($(page));
    };

    return this;
});

$(document).ready(function () {
    Bday = new Bday();
    Bday.prepare();

    $('#arrow-left').bind('click', function (e) {
        Bday.sliding('left');
    });
    $('#arrow-right').bind('click', function (e) {
        Bday.sliding('right');
    });
});