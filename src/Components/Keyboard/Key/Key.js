import React from "react";
import "./Key.css";

export default function Key({ letter, onClick, icon }) {
    return (
        <div
            className={
                letter === ""
                    ? "key key-backspace"
                    : letter === "ENTER"
                    ? "key key-enter"
                    : "key"
            }
            onClick={onClick}
        >
            {letter}
        </div>
    );
}
