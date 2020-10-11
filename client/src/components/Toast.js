import React from "react";

import "./Toast.css";

export default function Toast({ text, children }) {
	return (
		<div className="Toast">
			<p className="toast-text">{text}</p>
			{children}
		</div>
	);
}
