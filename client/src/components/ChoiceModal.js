import React from "react";

import "./ChoiceModal.css";

export default function ChoiceModal() {
	return (
		<div className="ChoiceModal">
			<div className="modal-container">
				<h3 className="modal-heading">Choose a word to draw</h3>
				<div className="choices">
					<div className="word-choice">Management</div>
					<div className="word-choice">College</div>
					<div className="word-choice">Balloon</div>
				</div>
			</div>
			<div className="bar-timer"></div>
		</div>
	);
}
