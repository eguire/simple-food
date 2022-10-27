$(function () {
	var mixer = mixitup('.popular__products', {
		load: {
			filter: '.category-a'
		}
	});

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

	if (window.matchMedia("(max-width: 900px)").matches) {
		$('.restaurant__list').slick({
			arrows: false,
			dots: true
		});
	}
});