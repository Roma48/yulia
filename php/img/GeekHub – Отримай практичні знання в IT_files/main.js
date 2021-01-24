$(document).ready(function () {
    // var fields = $('input, textarea');

    //wow animation
    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100
        }
    );
    wow.init();

    // Show/hide label/placeholder for active fields
    // function fieldsHandler(event) {
    //     var idInput;
    //
    //     if (event.type === 'focus') {
    //         idInput = $(this).attr('id');
    //         $('label[for=' + idInput +']').css('opacity', 1);
    //
    //         $(this).data('placeholder', $(this).attr('placeholder'));
    //         $(this).attr('placeholder', '');
    //     }
    //
    //     if (event.type === 'blur') {
    //         idInput = $(this).attr('id');
    //         $('label[for=' + idInput +']').css('opacity', 0);
    //
    //         $(this).attr('placeholder', $(this).data('placeholder'));
    //     }
    // }
    //
    // fields.on('focus blur', fieldsHandler);




    // change size textarea
    $('textarea').focus(function(){
        $(this).attr('rows', '2');
        autosize(document.querySelectorAll('textarea'));
    });

    // Navigation
    $(function () {
        var pull = $('.fa-bars'),
            menu = $('.menu-main-navigation-container');

        $(pull).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle();
        });

        $(window).resize(function () {
            var w = $(window).width();
            if (w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

    $('.fa-bars').on('click', function () {
        $(this).toggleClass('menu-focus');
    });

});