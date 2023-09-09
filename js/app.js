"use strict";

// слайдер
const slider = new Swiper('#blog', {
	loop: false,
	grabCursor: true,
	direction: 'vertical',
	slidesPerView: 3,
	slidesPerGroup: 2,
	speed: 650,
	spaceBetween: 0,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	 },
	 mousewheel: true,
})
// --

// перевод по кнопке
const selLang = document.querySelector('#lang');
const selLangMobile = document.querySelector('#lang-mb');
const allLang = ['en', 'ru'];
const mediaQuery = window.matchMedia('(min-width: 600px)');


selLang.addEventListener('click', changeURLLanguage,);
selLangMobile.addEventListener('click', changeURLLanguage,);

function changeURLLanguage() {
	let lang = this.value;
	location.href = `${window.location.pathname}#${lang}`;
	location.reload();
}
function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substring(1);
	if (!allLang.includes(hash)) {
		location.href = `${window.location.pathname}#en`;
		location.reload();
	}

	if (mediaQuery.matches) {
		(hash === 'en') ? selLang.value = 'ru' : selLang.value = 'en';
	} else {
		(hash === 'en') ? selLangMobile.value = 'ru' : selLangMobile.value = 'en';
	}

	document.querySelector('html').lang = langArr['htmlLang'][hash];
	document.querySelector('title').innerHTML = langArr['titlePage'][hash];

	for (let key in langArr) {
		let el = document.querySelector('.lng-' + key)
		if (el && (typeof langArr[key][hash] !== 'undefined')) {
			el.textContent = langArr[key][hash];
		}
	}
}
changeLanguage();
// --

// бургер, маска в моб. версии
const checkbox = document.getElementById('burger-checkbox'),
		html     = document.querySelector('Html');

checkbox.addEventListener('click', () => {
	if(checkbox.checked) {
		html.classList.add('no-scroll');
	}	else {
		setTimeout(() => {
			html.classList.remove('no-scroll');
		}, 2000)
	}
});
// --