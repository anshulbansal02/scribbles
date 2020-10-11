import React from "react";

import MessageBubble from "./MessageBubble";
import Avatar from "./Avatar";

import "./Message.css";

// Message Component receives data including text, username, messageId,
// It also checks if the message data received is of current user to syle accordingly
export default function Message({ data }) {
	// Mock state of current user get from global state
	const current_user = "anshul";

	const renderMessage = () => {
		if (current_user === data.username) {
			return <MessageBubble type="right" text={data.text} />;
		} else {
			return (
				<>
					<Avatar user={data.username} />
					<MessageBubble type="left" text={data.text} />
				</>
			);
		}
	};

	return <div className="Message">{renderMessage()}</div>;
}
