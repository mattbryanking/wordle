import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Tile.css";

export const Tile = ({
    word = "",
    row = "",
    value = "",
    input = "",
    locked = false,
    index = 0,
}) => {
    // used to trigger animation when row is submitted
    const [isFlipped, setIsFlipped] = useState(false);
    // used to trigger animation when input changes
    const [inputChanged, setInputChanged] = useState(false);
    // class name for tile
    const [className, setClassName] = useState("tile");
    // length of animations in seconds
    const flipDuration = 0.55;
    const expandDuration = 0.5;
    const delayActual = index * 0.1;

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

    function createClassName() {
        if (locked) {
            setTimeout(() => {
                if (input === value) {
                    setClassName("tile tile-locked-correct");
                } else if (word.indexOf(input) !== -1) {
                    compareStrings(word, row, index)
                        ? setClassName("tile tile-locked-misplaced")
                        : setClassName("tile tile-locked");
                } else {
                    setClassName("tile tile-locked");
                }
            }, (delayActual + flipDuration / 2) * 1000);
        } else if (input !== "") {
            setClassName("tile tile-filled");
        } else {
            setClassName("tile");
        }
    }

    // used to calculate edge cases where a letter is in the word, but is not in the correct position.
    // if the same letter is in the right position somewhere else, the current one should be locked
    // to avoid users looking a second occurance of the letter. however, without this function, the
    // letter would be marked as misplaced, which is incorrect.
    function compareStrings(string1, string2, index) {
        for (let i = 0; i < string1.length; i++) {
            if (i !== index && string1[i] === string2[i]) {
                return false;
            }
        }
        return true;
    }

    useEffect(() => {
        createClassName();
        if (locked) {
            setTimeout(() => {
                setIsFlipped(true);
            }, delayActual * 1000);
        }
    }, [locked, input]);

    useEffect(() => {
        if (isFlipped) {
            const timer = setTimeout(() => {
                setIsFlipped(false);
            }, flipDuration * 1000);
            return () => clearTimeout(timer);
        }
    }, [isFlipped]);

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
};
