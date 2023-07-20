import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Tile.css";

export const Tile = ({ word = "", value = "", input = "", locked = false }) => {
    // used to trigger animation when row is submitted
    const [isFlipped, setIsFlipped] = useState(false);
    // used to trigger animation when input changes
    const [inputChanged, setInputChanged] = useState(false);
    // if input is correct
    const [isCorrect, setIsCorrect] = useState(false);
    // class name for tile
    const [className, setClassName] = useState("tile");
    // length of animations in seconds
    const flipDuration = 0.55;
    const expandDuration = 0.15;

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
            if (input === value) {
                setClassName("tile tile-locked-correct");
            } else if (word.indexOf(input) !== -1) {
                setClassName("tile tile-locked-misplaced");
            } else {
                setClassName("tile tile-locked");
            }
        } else {
            setClassName("tile");
        }
    }

    useEffect(() => {
        createClassName();
        // TODO - this might be wrong
    }, [locked]);

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
            onClick={() => !isFlipped && setIsFlipped(true)}
            variants={inputChanged ? expandAnimation : flipAnimation}
            animate={inputChanged ? "expand" : isFlipped ? "flip" : "rest"}
        >
            <p>{input}</p>
        </motion.div>
    );
};
