import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Tile.css";

export const Tile = ({ value = "", input = "" }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    // length of animation in seconds
    const flipDuration = 0.7;

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

    useEffect(() => {
        if (isFlipped) {
            const timer = setTimeout(() => {
                setIsFlipped(false);
            }, flipDuration * 1000);
            return () => clearTimeout(timer);
        }
    }, [isFlipped]);


    return (
        <motion.div
            className="tile"
            onClick={() => !isFlipped && setIsFlipped(true)}
            variants={flipAnimation}
            animate={isFlipped ? "flipped" : "rest"}
        >
            {value}
        </motion.div>
    );
};
