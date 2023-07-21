import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../ThemeProvider";
import { motion } from "framer-motion";
import "./Tile.css";

export function Tile({
    word = "",
    row = "",
    value = "",
    input = "",
    locked = false,
    index = 0,
}) {
    // used to trigger animation when row is submitted
    const [isFlipped, setIsFlipped] = useState(false);
    // used to trigger animation when input changes
    const [inputChanged, setInputChanged] = useState(false);
    // class name for tile
    const [className, setClassName] = useState("tile");
    // used to change theme independently of delay in classname change
    const [baseClassName, setBaseClassName] = useState(className);
    // length of animations in seconds
    const flipDuration = 0.55;
    const expandDuration = 0.5;
    const delayActual = index * 0.1;
    // page theme
    const { darkMode } = useContext(ThemeContext);

    // amimation row submit
    const flipAnimation = {
        rest: { rotateX: 0 },
        flip: {
            rotateX: [0, 93, 0],
            transition: {
                duration: flipDuration,
                ease: "linear",
            },
        },
    };

    // animation on input
    const expandAnimation = {
        rest: { scale: 1 },
        expand: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 0.15,
                ease: "easeInOut",
            },
        },
    };

    // sets class name based on props
    function createClassName() {
        if (locked) {
            setTimeout(() => {
                if (input === value) {
                    setBaseClassName("tile tile-locked-correct");
                } else if (word.indexOf(input) !== -1) {
                    setBaseClassName(
                        compareStrings(word, row, index)
                            ? "tile tile-locked-misplaced"
                            : "tile tile-locked"
                    );
                } else {
                    setBaseClassName("tile tile-locked");
                }
            }, (delayActual + flipDuration / 2) * 1000);
        } else if (input !== "") {
            setBaseClassName("tile tile-filled");
        } else {
            setBaseClassName("tile");
        }

        setClassName(applyDarkMode(baseClassName));
    }

    function applyDarkMode(className) {
        if (className === "tile") {
            return darkMode ? className + " tile-dark" : className;
        }
        return darkMode ? className + "-dark" : className;
    }

    // used to calculate edge cases where a letter is in the word, but is not in the correct position.
    // if the same letter is in the right position somewhere else, the current one should be locked
    // to avoid users looking a second occurance of the letter. however, without this function, the
    // letter would be marked as misplaced, which is incorrect.

    // ! TODO - THIS DOESN'T WORK YET

    function compareStrings(string1, string2, index) {
        for (let i = 0; i < string1.length; i++) {
            if (i !== index && string1[i] === string2[i]) {
                return false;
            }
        }
        return true;
    }

    // checks every input to see if class name needs to be updated
    useEffect(() => {
        createClassName();
    }, [locked, input, darkMode, baseClassName]);

    // sets incremented delay on flip animation
    useEffect(() => {
        if (locked) {
            setTimeout(() => {
                setIsFlipped(true);
            }, delayActual * 1000);
        }
    }, [locked]);

    // handles flip animation
    useEffect(() => {
        if (isFlipped) {
            const timer = setTimeout(() => {
                setIsFlipped(false);
            }, flipDuration * 1000);
            return () => clearTimeout(timer);
        }
    }, [isFlipped]);

    // handles expand animation
    useEffect(() => {
        if (input !== "") {
            setInputChanged(true);
            setTimeout(() => {
                setInputChanged(false);
            }, expandDuration * 1000);
        }
    }, [input]);

    return (
        <motion.div
            className={className}
            variants={inputChanged ? expandAnimation : flipAnimation}
            animate={inputChanged ? "expand" : isFlipped ? "flip" : "rest"}
        >
            <p>{input}</p>
        </motion.div>
    );
}
