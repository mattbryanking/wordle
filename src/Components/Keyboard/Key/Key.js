import React, { useContext } from "react";
import { ThemeContext } from "../../../ThemeProvider";
import "./Key.css";

export default function Key({ letter, onClick, icon }) {
    // page theme
    const { darkMode } = useContext(ThemeContext);

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
