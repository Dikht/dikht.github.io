const pageBody = document.querySelector('body');
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const menuButton = document.querySelector(".menuButton");
const mobileMenu = document.querySelector(".mobileMenu");
const topMenuButton = document.querySelector(".topMenuButton");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
		hamburger.style.display = "none";
		pageBody.style.overflow = 'visible';
	} else {
		menu.classList.add("showMenu");
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
		hamburger.style.display = "block";
		pageBody.style.overflow = 'hidden';
		mobileMenu.classList.remove('fix');
	}
}

hamburger.addEventListener("click", toggleMenu);
menuButton.addEventListener("click", toggleMenu);
topMenuButton.addEventListener("click", toggleMenu);

menuItems.forEach(
	function (menuItem) {
		menuItem.addEventListener("click", toggleMenu);
	}
)