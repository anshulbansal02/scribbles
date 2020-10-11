import React from "react";
import { connect } from "react-redux";

import "./ToolsPanel.css";

import { strokeScale } from "../utils";

function ToolsPanel({ strokeValue, shadeValue, selectedColorHue }) {
	const handleOptionsMenu = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className="ToolsPanel">
			<div
				className="panel-item"
				name="item-type-tool"
				onClick={handleOptionsMenu}
			>
				<img className="item-type-tool" src="./svg/eraser.svg" alt="Eraser" />
			</div>

			<div
				className="panel-item"
				name="item-type-stroke"
				onClick={handleOptionsMenu}
			>
				<div className="item-type-stroke">
					<div
						className="stroke-width"
						style={{ transform: `scale(${strokeScale(strokeValue)})` }}
					/>
				</div>
			</div>

			<div
				className="panel-item"
				name="item-type-color"
				onClick={handleOptionsMenu}
			>
				<div className="item-type-color">
					<div
						className="current-color"
						style={{
							background: `hsl(${selectedColorHue},95%,${shadeValue}%)`,
						}}
					/>
				</div>
			</div>

			<div
				className="panel-item"
				name="item-type-undo"
				onClick={handleOptionsMenu}
			>
				<img className="item-type-undo" src="./svg/undo.svg" alt="Undo" />
			</div>

			<div
				className="panel-item"
				name="item-type-redo"
				onClick={handleOptionsMenu}
			>
				<img className="item-type-redo" src="./svg/redo.svg" alt="Redo" />
			</div>

			<div
				className="panel-item"
				name="item-type-clear"
				onClick={handleOptionsMenu}
			>
				<img className="item-type-clear" src="./svg/bin.svg" alt="Clear" />
			</div>
		</div>
	);
}

const mapStateToProps = ({ sliderValue, colorHue }) => {
	return {
		strokeValue: sliderValue.strokeSlider,
		shadeValue: sliderValue.shadeSlider,
		selectedColorHue: colorHue.colorHue,
	};
};

export default connect(mapStateToProps)(ToolsPanel);
