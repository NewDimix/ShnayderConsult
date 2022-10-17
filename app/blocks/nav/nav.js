function nav() {
	let navItem = document.getElementsByClassName("nav__item");
	let navUlHeight = navItem.length * navItem[0].offsetHeight;

	navUl.style.maxHeight = navUlHeight + "px";
}

let navUl = document.getElementById("navUl");
let navBtn = document.getElementById("navBtn");

navBtn.onclick = function () {
	if (navBtn.classList.contains("nav__btn_open")) {
		navUl.removeAttribute("style");
		navBtn.classList.remove("nav__btn_open");
	} else {
		navBtn.classList.add("nav__btn_open");
		nav();
	}
};

// nav();
