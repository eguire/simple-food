$(function () {

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 ) {
				$('.header').addClass('header--fixed');
		} else {
				$('.header').removeClass('header--fixed');
		}
})

	$('.testimonials__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev slider-nav slider-nav__prev testimonials__arrow-prev"></button>',
		nextArrow: '<button type="button" class="slick-next slider-nav slider-nav__next testimonials__arrow-next"></button>',
		infinite: false,
		responsive: [
			{
				breakpoint: 560,
				settings: {
					dots: false
				}
			}
		]
  });

	$('.burger').on('click', () => {
		$('.mobile-menu').addClass('mobile-menu--active');
		$('body').addClass('lock');
	});

	$('.mobile-menu__btn').on('click', () => {
		$('.mobile-menu').removeClass('mobile-menu--active');
		$('body').removeClass('lock');
	});

	$('.catalog__btn').on('click', () => {
		$('.catalog__aside').addClass('catalog__aside--active');
		$('body').addClass('lock');
	});

	$('.filters__btn').on('click', () => {
		$('.catalog__aside').removeClass('catalog__aside--active');
		$('body').removeClass('lock');
	});

	if (window.matchMedia("(max-width: 900px)").matches) {
		$('.restaurant__list, .sales__list').slick({
			arrows: false,
			dots: true
		});
	}

	var $range = $(".filters__range-slider");
    var $inputFrom = $(".filters__input--from");
    var $inputTo = $(".filters__input--to");
    var instance;
    var min = 100;
    var max = 1000;
    var from = 0;
    var to = 0;
    
    $range.ionRangeSlider({
        type: "double",
				hide_min_max: true,
				hide_from_to: true,
        min: min,
        max: max,
        from: 150,
        to: 900,
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");
    
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });

	var mixer = mixitup('.popular__products', {
		load: {
			filter: '.category-a'
		}
	});
});