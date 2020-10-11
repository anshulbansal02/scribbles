import React from "react";

import InputBox from "./components/InputBox";
import ChatBox from "./components/ChatBox";
import WordHint from "./components/WordHint";
import Canvas from "./components/Canvas";

import "./App.css";
import ToolsPanel from "./components/ToolsPanel";
import ToolsMenu from "./components/ToolsMenu";
import Timer from "./components/Timer";
import ChoiceModal from "./components/ChoiceModal";
import JoinScreen from "./components/JoinScreen";
import Toast from "./components/Toast";

export default function App() {
	// Gets new msg text from input field and dispatch it to server and global store with meta data
	const newMsgText = (messageText) => {
		console.log(messageText);
	};

	return (
		<div className="App">
			<div className="GameScreen">
				<div className="chat-pane">
					<WordHint charList={[" ", "E", " ", " ", "O"]} isComplete={false} />
					<ChatBox />
					<InputBox returnText={newMsgText} />
				</div>
				<div className="canvas-pane">
					<Canvas />
					<ToolsPanel />
					<ToolsMenu />
					<Timer />
					<ChoiceModal />
				</div>
			</div>

			{/* <JoinScreen /> */}
		</div>
	);
}
