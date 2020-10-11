import React, { useState } from "react";
import "./InputBox.css";

export default function InputBox({ returnText }) {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return;
		returnText(text);
		setText("");
	};

	return (
		<form className="input-box">
			<input
				type="text"
				placeholder="What's on your mind?"
				onChange={(e) => {
					setText(e.target.value);
				}}
				value={text}
			></input>
			<button className="send-btn" onClick={handleSubmit} type="submit">
				<img src="./svg/send.svg" alt="Send" />
			</button>
		</form>
	);
}
