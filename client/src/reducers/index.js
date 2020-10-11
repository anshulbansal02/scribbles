import { combineReducers } from "redux";

const sliders = { strokeSlider: 10, shadeSlider: 50 };

const sliderValueReducer = (slidersValue = sliders, action) => {
	if (action.type === "SLIDER_VALUE_CHANGE") {
		return {
			...slidersValue,
			[action.which]: action.value,
		};
	}
	return slidersValue;
};

const colorHueReducer = (colorHue = 10, action) => {
	if (action.type === "SELECT_COLOR_HUE") {
		return {
			colorHue: action.colorHue,
		};
	}
	return colorHue;
};

export default combineReducers({
	sliderValue: sliderValueReducer,
	colorHue: colorHueReducer,
});
