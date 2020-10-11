import React from "react";

import "./Avatar.css";

// Gets the username of avatar to be displayed
// Check from global state which username have which avatar image.
export default function Avatar({ username }) {
	return (
		<div className="Avatar">
			<img src="./svg/gorilla.svg" alt={username} />
		</div>
	);
}
