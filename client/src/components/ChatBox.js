import React from "react";

import Message from "./Message";

import "./ChatBox.css";

export default function ChatBox() {
	// ChatBox Component will get all the messages list and will map through all those messages to create Message Component
	const msg_list = [
		{
			username: "anshul",
			text: "Hello guys! whats up?",
			messageId: "234fdfw3",
		},
		{
			username: "ted",
			text: "I'm Fine how about you anshul",
			messageId: "2q4232354",
		},
		{
			username: "anshul",
			text: "let us start this game now. It is going to be fun one. Shall we?",
			messageId: "2q4232f54",
		},
		{
			username: "Morris",
			text: "Yo bois wot is up",
			messageId: "2gdgryffdw4",
		},
	];

	const renderMessages = () => {
		return msg_list.map((msg) => <Message key={msg.messageId} data={msg} />);
	};

	return <div className="ChatBox">{renderMessages()}</div>;
}
