const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

const hamburge_sec = document.querySelector('.header-sec .nav-bar .nav-list .hamburger');
const mobile_menu_sec = document.querySelector('.header-sec .nav-bar .nav-list ul');
const menu_item_sec = document.querySelectorAll('.header-sec .nav-bar .nav-list ul li a');
const header_sec = document.querySelector('.header-sec.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});



document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgba(255, 255, 255, 0.1);';
		header.style.marginTop  = '0px';

	} else {
		header.style.backgroundColor = 'rgb(0 0 0 / 10%)';
		header.style.marginTop  = '0px';
	}
});
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header_sec.style.backgroundColor = 'rgba(255, 255, 255, 0.1);';
		header_sec.style.marginTop  = '0px';

	} else {
		header_sec.style.backgroundColor = 'rgb(0 0 0 / 10%)';
		header_sec.style.marginTop  = '0px';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

menu_item_sec.forEach((item) => {
	item.addEventListener('click', () => {
		hamburge_sec.classList.toggle('active');
		mobile_menu_sec.classList.toggle('active');
	});
});