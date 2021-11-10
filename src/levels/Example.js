import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import "./Example.css";

const spring = {
	type: "spring",
	damping: 10,
	stiffness: 20,
};

export const Example = () => {
	const [holders, setHolders] = useState(myKeyHolders);
	const [selectMode, changeSelectMode] = useState(false);
	const [numShuffles, incrementNumShuffles] = useState(0);

    const backgroundColor = "#fdfdbb";

	useEffect(() => {
		if (selectMode === false && numShuffles < 4) {
			setTimeout(() => setHolders(shuffle(holders)), 3000);
			incrementNumShuffles(numShuffles + 1);
		} else {
            setTimeout(() => changeSelectMode(true), 3000)
		}
	}, [holders, selectMode]);

	return (
		<>
			<ul>
				{holders.map((holder) => (
					<motion.li
						key={holder}
						layout
						transition={spring}
						style={{ backgroundColor }}
						onClick={() => {
                            if (selectMode == true){
                                alert(`Selected ${holder}`);
                                changeSelectMode(!selectMode);
                                incrementNumShuffles(0);
                            }
						}}
					>
						{holder}
					</motion.li>
				))}
			</ul>
		</>
	);
};

const myKeyHolders = [
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
