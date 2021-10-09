import React, { useState } from "react";
import "./HolderComponent.css";

const SelectHolder = (holder) => {
	alert(`${holder} was selected`);
};

function HolderComponent(props) {
	const [hasKeys, giveKeys] = useState(
		props.holdsKeys === true ? "true" : "false"
	);
	return (
		<div className="container" onClick={() => SelectHolder(props.holder)}>
			<h3>{props.holder}</h3>
			<h3>hasKeys: {hasKeys}</h3>
		</div>
	);
}

export default HolderComponent;
