import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Tile.css";

export const Tile = ({ value = "", input = "", locked = false }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [className, setClassName] = useState("tile");
    // length of animation in seconds
    const flipDuration = 0.55;

    const flipAnimation = {
        rest: { rotateX: 0 },
        flipped: {
            rotateX: [0, 93, 0],
            transition: {
                duration: flipDuration,
                ease: "linear",
            },
        },
    };

    // used for testing flip effect
    useEffect(() => {
        if (isFlipped) {
            const timer = setTimeout(() => {
                setIsFlipped(false);
            }, flipDuration * 1000);
            return () => clearTimeout(timer);
        }
    }, [isFlipped]);

    function createClassName() {
        if (locked) {
            if (input === value) {
                setClassName("tile tile-locked-correct");
            }
            // setClassName("tile tile-locked-misplaced");
            setClassName("tile tile-locked");
        } else {
            setClassName("tile");
        }
    }

    return (
        <motion.div
            className={input === null ? "tile" : "tile filled"}
            onClick={() => !isFlipped && setIsFlipped(true)}
            variants={flipAnimation}
            animate={isFlipped ? "flipped" : "rest"}
        >
            <p>{value}</p>
        </motion.div>
    );
};
