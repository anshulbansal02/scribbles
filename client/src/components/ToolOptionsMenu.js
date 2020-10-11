import React from "react";
import { connect } from "react-redux";

import "./ToolOptionsMenu.css";
import "./OptionsMenu.css";

function ToolOptionsMenu() {
	return (
		<div className="tool-options-list" style={{ Width: "240px" }}>
			<div className="tool-option tool-type">
				<img className="tool-icon" src="./svg/pencil.svg" alt="Pencil" />
			</div>
			<div className="tool-option tool-type">
				<img className="tool-icon" src="./svg/paint.svg" alt="Paint Bucket" />
			</div>
			<div className="tool-option tool-type">
				<img className="tool-icon" src="./svg/eraser.svg" alt="Eraser" />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		state,
	};
};

export default connect(mapStateToProps)(ToolOptionsMenu);
