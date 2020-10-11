import React from "react";
import "./WordHint.css";

export default function WordHint({ charList, isComplete }) {
	const margin_class = isComplete ? "mg-side-2" : "mg-side-5";

	const renderWord = () => {
		return charList.map((char, index) =>
			char === " " ? (
				<span key={index} className={`empty-char ${margin_class}`}>
					{char}
				</span>
			) : (
				<span key={index} className={`word-char ${margin_class}`}>
					{char}
				</span>
			)
		);
	};

	return <div className="WordHint">{renderWord()}</div>;
}
