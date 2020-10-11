import React from "react";

import "./MessageBubble.css";

export default function MessageBubble({ text, type }) {
	return (
		<div className={`MessageBubble bubble-${type}`}>
			<p className="msg-text">{text}</p>
		</div>
	);
}
