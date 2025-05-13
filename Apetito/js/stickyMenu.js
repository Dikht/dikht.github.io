var nav = document.querySelector(".mobileMenu");
var sticky = window.innerHeight;
var toTop = document.querySelector("#toTopButton")

function showMobileMenu() {
	if (window.pageYOffset > sticky) {
		nav.classList.add("fix");
		toTop.style.display = "flex"
	} else {
		nav.classList.remove("fix");
		toTop.style.display = "none"
	}
}

window.onscroll = function () {
	showMobileMenu();
};