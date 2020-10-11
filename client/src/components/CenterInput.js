import React, { useState } from "react";

import "./CenterInput.css";

export default function CenterInput({ placeholder, type = "text" }) {
	const [placeholderText, setPlaceholderText] = useState(placeholder);

	return (
		<input
			className="CenterInput"
			type={type}
			placeholder={placeholderText}
			onFocus={() => setPlaceholderText(" ")}
			onBlur={() => setPlaceholderText(placeholder)}
		/>
	);
}
