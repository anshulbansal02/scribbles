import React, { useEffect, useRef, useState } from "react";

import { connect } from "react-redux";

import "./Canvas.css";

function Canvas({ strokeWidth = 1, selectedColorHue = 10, selectedShade }) {
	const canvasRef = useRef(null);
	const [ctx, setCtx] = useState(null);
	const [isDrawing, setIsDrawing] = useState(false);

	const startDraw = (e) => {
		setIsDrawing(true);
	};
	const endDraw = (e) => {
		setIsDrawing(false);
		ctx.beginPath();
	};
	const moveDraw = (e) => {
		if (isDrawing) {
			ctx.lineWidth = strokeWidth;
			ctx.strokeStyle = `hsl(${selectedColorHue}, 95%, ${selectedShade}%)`;
			ctx.lineCap = "round";
			ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		}
	};

	// Init Canvas
	useEffect(() => {
		const canvas = canvasRef.current;
		canvas.width = 0.7 * window.innerWidth;
		canvas.height = window.innerHeight;
		setCtx(canvas.getContext("2d"));
	}, [ctx]);

	return (
		<div className="CanvasContainer">
			<canvas
				id="drawing-pad"
				ref={canvasRef}
				onMouseDown={startDraw}
				onMouseUp={endDraw}
				onMouseMove={moveDraw}
			/>
		</div>
	);
}

const mapStateToProps = ({ sliderValue, colorHue }) => {
	return {
		strokeWidth: sliderValue.strokeSlider,
		selectedShade: sliderValue.shadeSlider,
		selectedColorHue: colorHue.colorHue,
	};
};

export default connect(mapStateToProps)(Canvas);
