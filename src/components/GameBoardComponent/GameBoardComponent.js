import React from "react";
import "./GameBoardComponent.css";
import Level1 from "../../levels/Level1";

function GameBoardComponent() {
	return (
		<div className="background">
			<Level1 />
		</div>
	);
}

export default GameBoardComponent;
