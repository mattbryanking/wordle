import React, { useState, useEffect } from "react";
import { Tile } from "./Tile/Tile";
import "./Board.css";

export default function Board() {
    // 2D array, 6 rows, 5 letters each
    const [board, setBoard] = useState(
        Array.from({ length: 6 }, () => new Array(5).fill(""))
    );
    // correct hidden word
    const [word, setWord] = useState("Hello");
    const [currRow, setCurrRow] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // allow only letters, backspace, and enter
            if (
                (event.key.length !== 1 || !event.key.match(/^[A-Za-z]$/)) &&
                event.key !== "Backspace" &&
                event.key !== "Enter"
            )
                return;

            console.log(event.key);

            // prevent backspace from default browser behavior
            if (event.key === "Backspace") {
                event.preventDefault();
                event.stopPropagation();
            }

            const newLetters = [...board[currRow]];

            // goes to next row on enter
            if (event.key === "Enter") {
                if (newLetters.every((letter) => letter !== "")) {
                    setCurrRow((prevRow) => prevRow + 1);
                } else {
                    return;
                }
            } else if (event.key === "Backspace") {
                for (let i = newLetters.length - 1; i >= 0; --i) {
                    if (newLetters[i] !== "") {
                        newLetters[i] = "";
                        break;
                    }
                }
            } else {
                for (let i = 0; i < newLetters.length; ++i) {
                    if (newLetters[i] === "") {
                        newLetters[i] = event.key.toUpperCase();
                        break;
                    }
                }
            }

            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[currRow] = newLetters;
                return newBoard;
            });
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [board, currRow]);

    return (
        <div className="board">
            <div className="board-row">
                <Tile value={board[0][0]} />
                <Tile value={board[0][1]} />
                <Tile value={board[0][2]} />
                <Tile value={board[0][3]} />
                <Tile value={board[0][4]} />
            </div>
            <div className="board-row">
                <Tile value={board[1][0]} />
                <Tile value={board[1][1]} />
                <Tile value={board[1][2]} />
                <Tile value={board[1][3]} />
                <Tile value={board[1][4]} />
            </div>
            <div className="board-row">
                <Tile value={board[2][0]} />
                <Tile value={board[2][1]} />
                <Tile value={board[2][2]} />
                <Tile value={board[2][3]} />
                <Tile value={board[2][4]} />
            </div>
            <div className="board-row">
                <Tile value={board[3][0]} />
                <Tile value={board[3][1]} />
                <Tile value={board[3][2]} />
                <Tile value={board[3][3]} />
                <Tile value={board[3][4]} />
            </div>
            <div className="board-row">
                <Tile value={board[4][0]} />
                <Tile value={board[4][1]} />
                <Tile value={board[4][2]} />
                <Tile value={board[4][3]} />
                <Tile value={board[4][4]} />
            </div>
            <div className="board-row">
                <Tile value={board[5][0]} />
                <Tile value={board[5][1]} />
                <Tile value={board[5][2]} />
                <Tile value={board[5][3]} />
                <Tile value={board[5][4]} />
            </div>
        </div>
    );
}
