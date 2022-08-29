import Swiper, { Navigation, Pagination, EffectFade, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Thumbs]);

//header-slider index
new Swiper('.slider', {

	loop: true,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	speed: 1500,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	effect: 'fade',
	fadeEffect: {
		crossFade: true
	}
});

//Основной Слайдер на странице товара 
new Swiper('.basic-product-slider', {
	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	speed: 1500,

	thumbs: {
		swiper: {
			el: '.secondary-product-slider',
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			slidesPerView: '3',
			speed: 1500,
			spaceBetween: 8,

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		}
	}
});

//Tabs slider Переключатель 
new Swiper('.tabs-slider', {

	autoplay: {
		delay: 10000,
		disableOnInteraction: false,
	},
	slidesPerView: 'auto',
	speed: 1500,
});
