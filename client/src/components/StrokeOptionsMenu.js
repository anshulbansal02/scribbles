import React from "react";
import { connect } from "react-redux";

import Slider from "./Slider";

import "./StrokeOptionsMenu.css";
import "./OptionsMenu.css";

import { moveSlider } from "../actions";
import { stroke_widths } from "../constants";
import { strokeScale } from "../utils";

function StrokeOptionsMenu({ strokeValue, moveSlider }) {
	return (
		<div style={{ width: "160px" }}>
			<div className="stroke-viz-container">
				<div
					className="stroke-viz"
					style={{ transform: `scale(${strokeScale(strokeValue)})` }}
				/>
			</div>
			<Slider
				min={1}
				max={25}
				name="strokeSlider"
				style={{ margin: "30px 0" }}
			/>
			<div className="tool-options-list">
				{stroke_widths.map((stroke, index) => {
					return (
						<div
							className="tool-option"
							key={index}
							onClick={() => {
								moveSlider("strokeSlider", (stroke - 0.05) / 0.035 + 1);
							}}
						>
							<div
								className="stroke option"
								style={{ transform: `scale(${stroke})` }}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const mapStateToProps = ({ sliderValue }) => {
	return {
		strokeValue: sliderValue.strokeSlider,
	};
};

export default connect(mapStateToProps, { moveSlider })(StrokeOptionsMenu);
