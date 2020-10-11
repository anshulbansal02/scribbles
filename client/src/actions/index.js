const moveSlider = (which, value) => {
	return {
		type: "SLIDER_VALUE_CHANGE",
		which: which,
		value: +value,
	};
};

const selectColor = (colorHue) => {
	return {
		type: "SELECT_COLOR_HUE",
		colorHue: colorHue,
	};
};

export { moveSlider, selectColor };
