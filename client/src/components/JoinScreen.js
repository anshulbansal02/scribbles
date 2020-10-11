import React, { useState } from "react";

import "./JoinScreen.css";

import CenterInput from "./CenterInput";

export default function JoinScreen() {
	const [roomType, setRoomType] = useState("Public");

	return (
		<div className="JoinScreen">
			<div className="join-modal">
				<h3 className="modal-heading">Join or Create Room</h3>
				<div className="join-form">
					<CenterInput placeholder="Username" />
					<CenterInput placeholder="Room Link / Code" />
					<div className="btn-group">
						<button className="join-btn">Join {roomType} Room</button>
						<button className="join-btn">Create Room</button>
					</div>
				</div>
			</div>
		</div>
	);
}
