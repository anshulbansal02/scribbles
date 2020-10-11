import React from "react";

import { moveSlider } from "../actions";
import { connect } from "react-redux";
import "./Slider.css";

function Slider({ moveSlider, sliderValue, name, ...restProps }) {
	return (
		<div className="Slider">
			<input
				className="slider-input"
				type="range"
				min="1"
				max="100"
				value={sliderValue}
				name={name}
				onChange={(e) => {
					moveSlider(name, e.target.value);
				}}
				{...restProps}
			/>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	if (!state.sliderValue) return { sliderValue: 50 };
	return {
		sliderValue: state.sliderValue[ownProps.name],
	};
};

export default connect(mapStateToProps, { moveSlider })(Slider);
