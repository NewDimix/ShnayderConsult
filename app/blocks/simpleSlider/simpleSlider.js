function simpleSliderWrap() {
	let sliderCount = 0;
	let sliderItems = document.getElementsByClassName("simpleSlider__item");

	return function () {
		sliderItems[sliderCount].classList.remove("simpleSlider__item_active");
		sliderCount++;
		if (sliderCount === sliderItems.length) {
			sliderCount = 0;
		}
		sliderItems[sliderCount].classList.add("simpleSlider__item_active");
	};
}

let simpleSlider = simpleSliderWrap();

setInterval(simpleSlider, 5000);

// simpleSlider();
