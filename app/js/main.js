$(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
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

	$('.sapid__slider').slick({
		prevArrow: '<button type="button" class="slick-prev slider-nav slider-nav__prev"></button>',
		nextArrow: '<button type="button" class="slick-next slider-nav slider-nav__next"></button>',
		slidesToScroll: 1,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 569,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					dots: true
				}
			},
		]
	});

	$('.product__slider').slick({
		fade: true,
		prevArrow: '<button type="button" class="slick-prev product__arrow product__arrow--prev"></button>',
		nextArrow: '<button type="button" class="slick-next product__arrow product__arrow--next"></button>',
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
				}
			},
		]
	});

	$('.product__rating').rateYo({
		normalFill: 'rgba(193, 193, 193, 0.3)',
		ratedFill: '#FFB800',
		fullStar: true,
		readOnly: true,
		starWidth: '16px',
		spacing: '6px',
		starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></svg>'
	});

	$('.reviews__rate').rateYo({
		normalFill: 'rgba(193, 193, 193, 0.3)',
		ratedFill: '#FFB800',
		fullStar: true,
		readOnly: true,
		starWidth: '16px',
		spacing: '5px',
		starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></svg>'
	});

	$('.reviews__form-stars').rateYo({
		normalFill: '#c1c1c1',
		ratedFill: '#FFB800',
		fullStar: true,
		starWidth: '16px',
		spacing: '5px',
		starSvg: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/></svg>'
	});

	$('.product__tabs-content').hide();
  $('.product__tabs-content:first').show();
  $('.product__tabs-item:first').addClass('product__tabs-item--active');
  $('.product__tabs-item').click(function(event) {
    $('.product__tabs-item').removeClass('product__tabs-item--active');
    $(this).addClass('product__tabs-item--active');
    $('.product__tabs-content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });

	$('.burger').on('click', () => {
		$('.mobile-menu').addClass('mobile-menu--active');
		$('body').addClass('lock');
	});

	$('.mobile-menu__btn').on('click', () => {
		$('.mobile-menu').removeClass('mobile-menu--active');
		$('body').removeClass('lock');
	});

	$('.burger').on('click', () => {
		$('.header').addClass('header--shadow');
	});

	$('.mobile-menu__btn').on('click', () => {
		$('.header').removeClass('header--shadow');
	});

	$('.catalog__btn').on('click', () => {
		$('.catalog__aside').addClass('catalog__aside--active');
		$('body').addClass('lock');
	});

	$('.filters__btn').on('click', () => {
		$('.catalog__aside').removeClass('catalog__aside--active');
		$('body').removeClass('lock');
	});

	$('.product__img').on('click', () => {
		$('.product__holder').addClass('product__holder--active');
		$('body').addClass('lock');
		$('body,html').animate({scrollTop: 0}, 400);
	});

	$('.product__close-btn').on('click', () => {
		$('.product__holder').removeClass('product__holder--active');
		$('body').removeClass('lock');
	});


	$('.product__counter-minus').on('click', function(){
		var minus = $(this).closest('.product__counter').find('input').val();

		if (minus == 1) {
			$(this).closest('.product__counter').find('input').val('1');
		} else {
			var minusVal = minus - 1;
			$(this).closest('.product__counter').find('input').val(minusVal);
		}
	});

	$('.product__counter-plus').on('click', function(){
		var plus = $(this).closest('.product__counter').find('input').val();

		if (plus == 99) {
			$(this).closest('.product__counter').find('input').val('99');
		} else {
			var plusVal = ++plus;
			$(this).closest('.product__counter').find('input').val(plusVal);
		}
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

	function updateInputs(data) {
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