import React from "react";

import "./ToolsMenu.css";
import ColorOptionsMenu from "./ColorOptionsMenu";
import StrokeOptionsMenu from "./StrokeOptionsMenu";
import ToolOptionsMenu from "./ToolOptionsMenu";

export default function ToolsMenu() {
	return (
		<div className="ToolsMenu">
			<ColorOptionsMenu />
		</div>
	);
}
