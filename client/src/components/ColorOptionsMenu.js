import React from "react";
import { connect } from "react-redux";

import Slider from "./Slider";

import "./ColorOptionsMenu.css";
import "./OptionsMenu.css";

import { color_hues } from "../constants";
import { selectColor } from "../actions";

function ColorOptionsMenu({ selectedColorHue = 10, shadeValue, selectColor }) {
	const color_elements = color_hues.map((hue) => {
		return (
			<div
				className={`tool-option ${selectedColorHue === hue ? "selected" : ""}`}
				key={hue}
				value={hue}
				onClick={(e) => {
					selectColor(hue);
				}}
			>
				<div
					className="color option"
					style={{ backgroundColor: `hsl(${hue}, 95%, ${shadeValue}%` }}
				/>
			</div>
		);
	});

	return (
		<div style={{ width: "160px" }}>
			<div className="tool-options-list">{color_elements}</div>
			<Slider
				min={0}
				max={100}
				name="shadeSlider"
				style={{
					background: `linear-gradient(90deg,#000 0%, hsla(${selectedColorHue}, 90%, 50%, 1) 50%,#fff 95%,#fff 100%)`,
					margin: "20px 0 10px 0",
				}}
			/>
		</div>
	);
}

const mapStateToProps = ({ sliderValue, colorHue }) => {
	return {
		shadeValue: sliderValue.shadeSlider,
		selectedColorHue: colorHue.colorHue,
	};
};

export default connect(mapStateToProps, { selectColor })(ColorOptionsMenu);
