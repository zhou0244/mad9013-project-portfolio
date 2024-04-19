const mobile = document.querySelector(".menu__head");
const menu = document.querySelector(".nav__menu-mobile");

function init() {
	mobile.addEventListener("click", handleClick);

	const toTop = document.querySelector(".to-top");
	function handleToTop() {
		if (window.scrollY > 50) {
			toTop.classList.add("visible");
		} else {
			toTop.classList.remove("visible");
		}
	}
	toTop && handleToTop();
	toTop && window.addEventListener("scroll", handleToTop);
}

function handleClick(ev) {
	// console.log(ev.target);
	const hamburger = ev.target.closest(".hamburger");
	if (hamburger) {
		if (hamburger.classList.contains("hamburger--open")) {
			hamburger.classList.remove("hamburger--open");
			menu.classList.remove("mobile--open");
			return;
		}
		console.log(hamburger.getAttribute("id"));
		hamburger.classList.add("hamburger--open");
		menu.classList.add("mobile--open");
	}
}

window.addEventListener("DOMContentLoaded", init);
