$(function () {
	var mixer = mixitup('.popular__products', {
		load: {
			filter: '.category-a'
		}
	});

	$('.testimonials__slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev slider-nav slider-nav__prev"></button>',
		nextArrow: '<button type="button" class="slick-next slider-nav slider-nav__next"></button>',
		infinite: false,
  });
})