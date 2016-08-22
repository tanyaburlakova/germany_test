$(() => {
    $('.jsSlider').slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        asNavFor: '.jsSliderNav',
        responsive: [{
            breakpoint: 1500,
            settings: {
                centerPadding: '150px',
            }
        }, {
            breakpoint: 1200,
            settings: {
                centerPadding: '80px',
            }
        }]
    });
    $('.jsSliderNav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.jsSlider',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    // show/hide nav content
    $('.jsNavigationHandler').on('click', function(e) {
        e.preventDefault();

        var
            $self = $(this),
            $navHandler = $('.jsNavigationHandler'),
            $navContent = $('.jsNavigationEl'),
            $navRunner = $('.jsNavRunner'),
            $navLinner = $('.jsNavLinner'),
            currentClass = $self.data('nav-handler'),
            currentBox = $navContent.filter('[data-nav-el="' + currentClass + '"]'),
            currentPos = $navRunner.css('left'),
            isActive = 'is-active',
            newPos;
        // vars

        // add active class to handler
        $navHandler.removeClass(isActive);
        $self.addClass(isActive);

        // show content
        $navContent.removeClass(isActive);
        if (!(currentBox.hasClass(isActive))) {
            currentBox.addClass(isActive);
        }

        // move runner
        newPos = $self.position().left + ($self.width() / 2) - 4;
        $navRunner.addClass(isActive);
        $navRunner.css({
            'left': newPos
        });

        // move linner
        $navLinner.addClass(isActive);
        $navLinner.css({
            'left': $self.position().left,
            'width': $self.outerWidth()
        });
    });
});
