(function (window, document, $) {

    $(document).ready(function () {
        var steps = $('.steps');
        var contentCount = $('.content').length;
        for (var i = 1; i <= contentCount; i++) {
            if ($('#step-' + i).length > 0) {
                steps.append('<a href="#step-' + i + '" class="dot"></a>');
            }
        }
        steps.find('a').first().addClass('active');
        steps.addClass('odd');

        $('.dot').bind('click', function () {
            if ($(this).hasClass('active')) {
                return false;
            }
            var steps = $('.steps');
            var oddEven = 'odd';
            if (steps.hasClass(oddEven)) {
                oddEven = 'even';
            }
            steps.find('a').removeClass('active');
            steps.removeClass('odd').removeClass('even');
            steps.addClass(oddEven);
            $(this).addClass('active');
        });

        $('.popup').bind('click', function () {
            var obj = $('.popup-wrapper');
            $(obj).css( "left", Math.max( 0, ( ( $(window).width() - $(obj).outerWidth() )  / 2 ) ) + "px" );
            $(obj).css( "top", Math.max( 0, ( ($(window).height() - $(obj).outerHeight() ) / 2 ) ) + "px" );
            $('.shadow').show();
            obj.show();

            $('.close-button, .shadow').bind('click', function () {
                $('.popup-wrapper').hide();
                $('.shadow').hide();
            });
        });
    });

})(window, window.document, jQuery);
