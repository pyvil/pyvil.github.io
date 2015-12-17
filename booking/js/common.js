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
        click       = 0,
        distanse    = 80;

    var pageText = [
          {
            'id' : 1,
            'text' : [
              '— Dzień dobry dziadku Gawi! Zostań z naszymi dziećmi. My pójdziemy do lasu zbierać jagody i przyniesiemy teżtobie.— Dzień dobry moi drodzy! Chętnie pobawię się z waszymi maluchami.',
              'Dawno temu w krainie zwanej Cudotworią żył sobie dobry i mądry staruszek Gawi. Pewnego razu przyszły do niego dorosłe Cudotworki ze swoimi dziećmi',
            ],
            'style' : [{},{}],
          },
          {
            'id' : 2,
            'text' : [
              'Staruszek odprowadził rodziców, a dzieci rozbiegły się po podwórku w różne strony. — Oj! Dzieci, przecież zaraz spadniecie! — zawołał Gawi do dwóch malców, którzy zaczęli wspinać się na drzewo.— Bum! Bach! Terebach! — rozniosło się z innej strony. Jeden berbeć wystraszył pszczoły.',
              '— To moje! Nie ruszaj! — dwa Cudotworki nie chciały się podzielić zabawką.— Och! — dziadek złapał się za głowę. Dzieci,przestańcie!'
            ],
            'style' : [{right: 50,
            bottom: 102},{left: 145,
            top: -27}]
          },
          {
            'id' : 3,
            'text' : [
              'Było tak głośno, że nikt nie słyszał staruszka.I posłuchajcie, co wymyślił.Wyniósł z domu słoiczek miodu i zrobił herbatę.',
              'Słoiczek otworzył się i po całym podwórku rozniósł się zapach miodu. Taki słodziutki, że dzieciaki od razu przybiegły do staruszka.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 4,
            'text' : [
              'O jak miło — pomyślał Gawi. I wszyscy zaczęli pić herbatkę.— Dziadku, a ty zawsze byłeś taki brodaty? — zapytał ciekawski, malutki Cudotworek.— Nie — uśmiechnął się staruszek — kiedyś, bardzo dawno temu byłem tak samo malutki jak i wy.— To niemożliwe! Czy to może być prawda? — malcy szeptali sobie na ucho.— Ha-ha-ha! — roześmiał się głośno dziadek.',
              'Kiedy byłem mały — zaczął opowiadać — bardzo mało wiedziałem i rzadko rozumiałem,co mówią dorośli. No na przykład zwrot„nie wolno”. Wydawało mi się, że to taki maleńki zły ptaszek. Myślałem, że jeśli zatkam uszy, to nie wyjdzie z ust moich rodziców. A potem zaprzyjaźniłem się z tym ptaszkiem, ale to było dużo później.'
            ],
            'style' : [{bottom: 150,
            right: 50}, {}],
          },
          {
            'id' : 5,
            'text' : [
              'Właśnie taka historia zdarzyła się ze mną — zaczął opowieść dziadek Gawi. Był ciepły słoneczny dzień. Bawiłem się z przyjaciółmi na podwórku.',
              '— Mogę z wami pograć w piłkę? — rozniósł się czyjś głos.Odwróciłem się i zobaczyłem nieznajomego Cudotworka w cętki. Takiego jeszcze nigdy nie widziałem'
            ],
            'style' : [{width: 245}, {width: 245}],
          },
          {
            'id' : 6,
            'text' : [
              '— Dlaczego jesteś w cętki? Zachorowałeś czy co? — powiedziałem do niego.— Hi-hi-hi! — zaśmiali się moi przyjaciele.— Dlaczego zachorowałem? Ja zawsze taki byłem — odpowiedział nieznajomy.',
              '— My się z centawkami nie bawimy! — powiedziałem i dalej graliśmy.— Centawek! Centawek! — drażnili się moi przyjaciele.Nieznajomemu zrobiło się bardzo smutno, ale nic nie odpowiedział i nieśmiało odszedł na bok.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 7,
            'text' : [
              '— Brzdęk! — piłka z gruchotem wpadła w czyjeś okno.— Uciekamy — krzyknąłem i schowaliśmy się, a Cetawek został na podwórku.— Z domu wyszedł dorosły Cudotworek.— Kto to zrobił? — gniewnie popatrzył dookoła.',
              'Niepostrzeżenie wyjrzeliśmy zza drzewa.— Oj, co teraz będzie! Dlaczego Centawek nie uciekł? — zapytał mój przyjaciel.— Pewnie teraz na nas naskarży — odpowiedziałem.— Czy to ty rozbiłeś okno? — zapytał Centawka dorosły.— Tak, to ja.Przepraszam — smutno odpowiedział centkowany.— A gdzie jest twoja piłka? Jak rozbiłeś okno? — wykrzykiwał dalej dorosły.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 8,
            'text' : [
              'Nagle zrobiło mi się bardzo wstyd, że obrażaliśmy Centawka. Dokuczaliśmy mu, a on wstawił się za nami.— To źle się kryći siedzieć cicho — powiedziałem swoim przyjaciołom. Centawek jest niewinny i bardzo dobry. Czym prędzej wróciliśmy na podwórko z piłką, którą zdążyliśmy wcześniej zabrać.',
              '— Proszę pana, niech pan na niego nie krzyczy. To my jesteśmy winni, to nasza piłka. Przepraszamy — mruknęliśmy.Dorosły Cudotworek zdziwił się.— Świetnie, że się przyznaliście — powiedział i przestał się gniewać. Dziś zaliczyliście bardzo ważną lekcję: zawsze trzeba mówić prawdę i odpowiadać za swoje czyny— I ciebie przepraszamy — zwróciliśmy się do centkowanego. Nie będziemy cię więcej obrażać.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 9,
            'text' : [
              '— Ani trochę się nie obraziłem i bardzo się cieszę, że teraz jesteśmy przyjaciółmi – odpowiedział maluch. A przezwisko „Centawek” bardzo mi się podoba.— Hura! Jesteśmy teraz przyjaciółmi! — krzyknęliśmy i zaczęliśmy się obejmować. Dorosły się uśmiechnął.W ten sposób zrozumiałem, że nigdy nie wolno oceniać po wyglądzie. Obojętnie, jaki to Cudotworek, żółty czy zielony, w cętki czy w paski… Ważne są jego czyny. Od tej pory mówiłem tylko prawdę.Właśnie tak, moi drodzy. Z Centawkiem przyjaźnię się do dziś.',
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 10,
            'text' : [
              'Maleńcy goście z ciekawością słuchali dziadka i dalej pili herbatę.A teraz opowiem wam drugą historię.Mój przyjaciel miał piękne kredki. Tak bardzo się mu podobały, że wszędzie je nosił ze sobą. I te kredki mnie też bardzo się podobały. Tak bardzo mi się podobały, że postanowiłem je sobie po cichutku wziąć. Pewnego razu, kiedy przyjaciel zbierał jagody, niepostrzeżenie zabrałem kredki. Teraz wszystko będę miał piękne — pomyślałem.Cały dzień rysowałem. Na moich obrazkach była żyrafa, lew i nawet krokodyl. Szybko nadszedł wieczór i mama zawołała mnie do spania.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 11,
            'text' : [
              'Nazajutrz wesoło wybiegłem z domu i boleśnie się uderzyłem o coś w czoło. Podniosłem oczy i zobaczyłem przed sobą ogromną żyrafę. Obok niej stał tak samo ogromny lew. No tak — pomyślałem.  To przecież moje rysunki. Nagle rozniósł się ciążki tupot, a potem pokazał się gigantyczny krokodyl. Oj! — wystraszyłem się i chciałem schować się w domu.— Zobacz co zrobiłeś! Narysowałeś nas i teraz nie możemy wrócić do domu ¬¬— zapłakały olbrzymy.— Ale to nie moje kredki — powiedziałem.— To ty! — zaryczał lew. To wszystko przez ciebie i twoje zaczarowane kredki!'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 12,
            'text' : [
              'Nie, przecież kredki nie są moje. Nie moje! One należą do mojego przyjaciela — sprzeciwiłem się i… obudziłem.',
              'Wyszedłem z łóżka. Z lękiem spojrzałem na kredki i ostrożnie wyjrzałem przez okno. Wszystko było takie jak zwykle. Nie było żadnych ogromnych zwierząt.— Uff — westchnąłem z ulgą, chwyciłem kredki i pobiegłem do swojego  przyjaciela.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 13,
            'text' : [
              '— Znalazłeś je! — ucieszył się przyjaciel i zaczął mnie ściskać.— Proszę, wybacz mi — zmieszałem się. Wziąłem twoje kredki bez pytania.— Wiesz co — po chwili ciszy mówił dalej — zróbmy tak, że jednego dnia kredki będą moje, a drugiego twoje.— Zgoda — ucieszyłem się i zaczęliśmy zabawę.To wydarzenie nauczyło mnie, aby nigdy nie brać nie swoich rzeczy bez pytania. Zapamiętajcie to szkraby!',
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 14,
            'text' : [
              'A trzecia historia jest taka…Moja babcia podarowała mi na urodziny dużo wspaniałych zabawek. Tak się cieszyłem, że postanowiłem pochwalić się swoim przyjaciołom.— A ja coś mam! A ja coś mam!— O! Jaka kolejka! Zbudujmy do niej tory — podbiegł do mnie przyjaciel.—Nie, to moja kolejka. Nie dam.— Jesteś wredny. I baw się sam! —powiedział i odszedł.',
              '— Jaka interesująca książka -powiedział inny cudotworek. Obejrzyjmy razem obrazki.— To moja ulubiona książka. Samemu jest mi potrzebna.— Z tobą w ogóle nie ma zabawy. Gawi chytrus!— Co z tobą? — podjechał do mnie jeszcze jeden Cudotworek na rowerze.— Moje bańki mydlane. Moja książka. Moja kolejka. Nikomu nic nie dam.— A mi nic nie jest potrzebne — zdziwił się Cudotworek i odjechał.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 15,
            'text' : [
              'No i mogę być wredny, za to mam takie świetne zabawki i nikt nie jest mi potrzebny. Bawiłem się, bawiłem i zrobiło mi się nudno. Nie wiedziałem czym się zająć. Miałem fajne zabawki, ale bez przyjaciół nie było z nich żadnego pożytku. A inne cudotworki bawiły się zgodnie i głośno chichotały.',
              'Dlaczego się smucisz? — podeszła do mnie babcia. Jesteś moim wspaniałym wnuczkiem. Taki dobry i umiesz się dzielić z innymi. Weź kawałeczek ciasta.Usłyszeli to moi przyjaciele i bardzo się zdziwili: Dlaczego babcia go chwali? A słowa babci wcale mnie nie cieszyły. Bardzo się zdenerwowałem i zawstydziłem. Nawet cały poczerwieniałem. I nie chciało mi się już jeść tego ciasta. Babcia na pewno mnie z kimś pomyliła —  pomyślałem.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          },
          {
            'id' : 16,
            'text' : [
              'Spojrzałem na ciasto, na pyszne jagódki na wierzchu, wymamrotałem coś pod nosem i pobiegłem do domu.— Co się z nim dzieje? — zdziwili się moi przyjaciele.Tylko babcia niczego nie powiedziała, a po prostu uśmiechnęła się dobrotliwie. A ja wróciłem po pięciu minutach z nożem i talerzykami, pokroiłem tort, poczęstowałem dzieci na podwórku no i babcię też.',
              'Dlaczego się smucisz? — podeszła do mnie babcia. Jesteś moim wspaniałym wnuczkiem. Taki dobry i umiesz się dzielić z innymi. Weź kawałeczek ciasta.Usłyszeli to moi przyjaciele i bardzo się zdziwili: Dlaczego babcia go chwali? A słowa babci wcale mnie nie cieszyły. Bardzo się zdenerwowałem i zawstydziłem. Nawet cały poczerwieniałem. I nie chciało mi się już jeść tego ciasta. Babcia na pewno mnie z kimś pomyliła —  pomyślałem.'
            ],
            'style' : [{bottom: 80},{right: 50,
            bottom: 50}]
          }
        ]

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
        var self = this;
        this.sound.song.on('end', function () {
            self.turnPage('next');
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

            $('.legend').find('span').bind('click', function (e) {
                $(this).parent().toggleClass('open');
            })
        },

        /**
         * initialize all needed features
         */
        init : function () {
            this.prepareAligns();
            this.preparePages();
            $('.legend-context').slick({
                slidesToShow : 4,
                slidesToScroll : 1,
                prevArrow : $('#slick-arrow-left'),
                nextArrow : $('#slick-arrow-right')
            });

            for (var i = 1; i < this.pagesAmount; i++) {
                $('.legend-context').slick('slickAdd', "<img src='img/sample/cud" + i + ".jpg' />");
            }
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
                //$(page).find('video').addClass(self.isMobile() ? 'mobile' : 'no-mobile');
                if (index) {
                  $(page).attr('data-scroll', '1');
                } else {
                  $(page).attr('data-scroll', '0');
                }
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
            var isScroll = parseInt($(this.currentPage).attr('data-scroll'), 10);
            var currentPageInstance = this.currentPage;
            var animationImageWidth = $(this.currentPage).width();
            switch (direction) {
                case 'next' :
                    click = isScroll ? click + 1 : click;
                    current++;
                    if ((isScroll == 1) && (click < 2)){
                      $(this.currentPage).css('background-position', '-' + (animationImageWidth / 2) + 'px 0px');
                      $(this.currentPage).find('.text_block').attr('style', '');
                      $(this.currentPage).find('.text_block').html(pageText[current - 1].text[click]);
                      $(this.currentPage).find('.text_block').css(pageText[current - 1].style[click]);
                      return;
                    } else {
                      this.currentPage = $(this.allPagesInstances).parent().find('[data-page="' + (current) + '"]');
                      click = 0;
                    }
                      if (current == this.pagesAmount) return false;
                break;

                default :
                    click = isScroll ? click - 1 : click;
                    current = direction == 'home' ? 0 : current - 1;
                    if ( current < 0 ) return false;
                    if ((isScroll == 1) && (click >= 0)){
                      $(this.currentPage).css('background-position', '0px 0px');
                      $(this.currentPage).find('.text_block').attr('style', '');
                      $(this.currentPage).find('.text_block').html(pageText[current - 1].text[click]);
                      $(this.currentPage).find('.text_block').css(pageText[current - 1].style[click]);
                      return;
                    } else {
                      this.currentPage = $(this.allPagesInstances).parent().find('[data-page="' + (current) + '"]');
                      click = 0;
                    }
                break;
            }

            $(this.currentPage).find('.text_block').attr('style', '');
            $(this.currentPage).find('.text_block').html(pageText[current - 1].text[click]);
            $(this.currentPage).find('.text_block').css(pageText[current - 1].style[click]);

            $(this.currentPage).css('background', 'url(img/sample/cud' + current + '.jpg)')
                   .css('background-position', '0px 0px')
                   .css('transition-duration', '0.5s')
                   .css('background-size', '169% 100%');

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
            $('.legend').find('span').text(current);

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
