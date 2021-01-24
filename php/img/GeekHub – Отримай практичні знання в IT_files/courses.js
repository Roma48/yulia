jQuery(function($) {
    if ($('.faq aside').length !== 0) {
        if ($(this).scrollTop() >= $('.faq aside').offset().top) {
            $('.faq .aside-container').addClass('fix');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() >= $('.faq aside').offset().top) {
                $('.faq .aside-container').addClass('fix');
            } else {
                $('.faq .aside-container').removeClass('fix');
            }
            var t = $(this).scrollTop() + 150;
            var sid;
            $('.faq aside li a').each(function () {
                var id = $(this).attr('href').replace('/', '');
                var o = $(id).offset().top;
                if (o < t) {
                    sid = id;
                }
                $('.faq aside li').removeClass('active');
                if (sid) {
                    $('.faq aside [href="' + sid + '"]').parent().addClass('active');
                }
            });
        });

        $('.faq aside a').click(function () {
            var el = $(this).attr('href');
            $('body, html').animate({
                scrollTop: $(el).offset().top - $('nav').height()
            }, 1200);
            return false;
        });
    }

    $('.courses-block ul').each(function () {
        var tabLis = $(this).find('li');
        var tabContent = $('.tab-right > div');
        tabContent.hide();
        tabLis.first().addClass('active');
        tabContent.first().show();
    });
    $('.courses-block ul').on('click', 'li', function (e) {
        var $this = $(this);
        var parentUL = $this.parent();
        var tabContent = $('.tab-right');

        if ($this.hasClass('active')) {
            return false;
        }

        parentUL.children().removeClass('active');
        $this.addClass('active');

        tabContent.children().hide();
        var showById = $this.find('a').attr('href');
        tabContent.find(showById).fadeIn(400);

        if (history.pushState) {
            history.pushState(null, null, showById);
        }
        else {
            location.hash = showById;
        }

        e.preventDefault();
    });

    if (window.location.hash) {
        $('.courses-block ul li [href="' + window.location.hash + '"]').closest('li').click();
    }
});

jQuery(window).load(function(){
    $('.masonry').masonry({
        itemSelector: '.member'
    });
 });


 