import React, { useState, useEffect } from "react";
import { generate } from "random-words";
import { Tile } from "./Tile/Tile";
import "./Board.css";

export default function Board() {
    // 2D array, 6 rows, 5 letters each
    const [board, setBoard] = useState(
        Array.from({ length: 6 }, () => new Array(5).fill(""))
    );
    // correct hidden word
    const [word, setWord] = useState("");
    // current row being edited
    const [currRow, setCurrRow] = useState(0);
    // used to trigger win condition
    const [correct, setCorrect] = useState(false);
    // list of all 5 letter words
    const [wordList, setWordList] = useState([]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            // allow only letters, backspace, and enter
            if (
                (event.key.length !== 1 || !event.key.match(/^[A-Za-z]$/)) &&
                event.key !== "Backspace" &&
                event.key !== "Enter"
            )
                return;

            // prevent backspace from default browser behavior
            if (event.key === "Backspace") {
                event.preventDefault();
                event.stopPropagation();
            }

            const newLetters = [...board[currRow]];

            // goes to next row on enter
            if (event.key === "Enter") {
                if (newLetters.every((letter) => letter !== "")) {
                    if (newLetters.join("").toLowerCase() === word) {
                        setCorrect(true);
                        return;
                    } else if (
                        !wordList.includes(newLetters.join("").toLowerCase())
                    ) {
                        alert("Invalid word!");
                        return;
                    }
                    setCurrRow((prevRow) => prevRow + 1);
                } else {
                    return;
                }
            }
            // deletes last letter on backspace
            else if (event.key === "Backspace") {
                for (let i = newLetters.length - 1; i >= 0; --i) {
                    if (newLetters[i] !== "") {
                        newLetters[i] = "";
                        break;
                    }
                }
            }
            // adds letter to first empty space
            else {
                for (let i = 0; i < newLetters.length; ++i) {
                    if (newLetters[i] === "") {
                        newLetters[i] = event.key.toUpperCase();
                        break;
                    }
                }
            }

            // updates board
            setBoard((prevBoard) => {
                const newBoard = [...prevBoard];
                newBoard[currRow] = newLetters;
                return newBoard;
            });
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [board, currRow]);

    useEffect(() => {
        setWord(generate({ minLength: 5, maxLength: 5 }).toUpperCase());

        const allWords = require("an-array-of-english-words");
        const fiveLetterWords = allWords.filter((word) => word.length === 5);
        setWordList(fiveLetterWords);
    }, []);

    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div className="board-row" key={rowIndex}>
                    {row.map((item, index) => (
                        <Tile
                            word={word}
                            value={word.charAt(index)}
                            input={item}
                            locked={rowIndex < currRow}
                            delay={index}
                            key={index}
                        />
                    ))}
                </div>
            ))}
            <h1>{word}</h1>
        </div>
    );
}
