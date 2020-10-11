import React, { useState } from "react";

import "./Timer.css";

export default function Timer() {
	const [time, setTime] = useState(73);

	return (
		<div className="Timer">
			<svg viewBox="0 0 64 64" className="pie">
				<circle
					r="25%"
					cx="50%"
					cy="50%"
					style={{ strokeDasharray: "63 100" }}
				></circle>
			</svg>
			<p className="time-left">{time}</p>
		</div>
	);
}
