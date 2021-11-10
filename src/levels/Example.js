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
    const [phase, increasePhase] = useState(1);

    const backgroundColor = "#fdfdbb";
    const numPhases = 4;

	useEffect(() => {
        if (phase <= numPhases) {
            if (selectMode === false && numShuffles < numPhases) {
                setTimeout(() => setHolders(shuffle(holders)), 3000);
                incrementNumShuffles(numShuffles + 1);
            } else {
                setTimeout(() => changeSelectMode(true), 3000)
            }
        }
	}, [holders, selectMode, phase]);

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
                                if (isCorrect(phase, holder)) {
                                    alert("Correct!")
                                }
                                else {
                                    alert("Sorry, the correct answer was " + correctAnswer(phase) + ".")
                                }
                                changeSelectMode(!selectMode);
                                incrementNumShuffles(0);
                                increasePhase(phase + 1);
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

const isCorrect = (phase, holder) => {
    if (phase == 1) return holder == correctAnswer(phase);
    else if (phase == 2) return holder == correctAnswer(phase);
    else if (phase == 3) return holder == correctAnswer(phase);
    else if (phase == 4) return holder == correctAnswer(phase);
    else throw "Level doesn't exist!";
}

const correctAnswer = (phase) => {
    if (phase == 1) return "Jesus Christ";
    else if (phase == 2) return "Peter";
    else if (phase == 3) return "James";
    else if (phase == 4) return "John";
    else throw "Level doesn't exist!";
}

