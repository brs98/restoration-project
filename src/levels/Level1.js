import React, { useEffect, useState } from "react";
import HolderComponent from "../components/HolderComponent/HolderComponent";
import "./Level1.css";

var myKeyHolders = [
	"Jesus Christ",
	"Peter",
	"James",
	"John",
	"Andrew",
	"Philip",
	"Judas Iscariot",
	"Matthew",
	"Thomas",
	"James (the son of Alpheus)",
	"Bartholomew",
	"Judas Thaddeus",
	"Simon Zelotes",
];

function Level_1() {
	const [keyHolders, updateKeyHolders] = useState(myKeyHolders);
	const [shufflePhase, setShufflePhase] = useState(false);

	useEffect(() => {
		const ShuffleKeyHolders = () => {
			const copyArray = keyHolders.sort(() => Math.random() - 0.5);
			updateKeyHolders(copyArray);
		};
		ShuffleKeyHolders();
	}, [keyHolders, shufflePhase]);

	const ListOfKeyHolders = keyHolders.map((keyHolder) => {
		if (
			keyHolder === "Jesus Christ" ||
			keyHolder === "Peter" ||
			keyHolder === "James" ||
			keyHolder === "John"
		) {
			return (
				<HolderComponent
					key={keyHolder.toString()}
					holder={keyHolder}
					holdsKeys={true}
				/>
			);
		} else {
			return (
				<HolderComponent
					key={keyHolder.toString()}
					holder={keyHolder}
					holdsKeys={false}
				/>
			);
		}
	});

	return (
		<div className="background">
			{ListOfKeyHolders}
			<button onClick={() => setShufflePhase(!shufflePhase)}>Shuffle</button>
		</div>
	);
}

export default Level_1;
