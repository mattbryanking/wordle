import React, { useState } from "react";
import { Tile } from "./Tile/Tile";
import "./Board.css";

export default function Board() {
    const [firstRow, setFirstRow] = useState(["H", "E", "L", "L", "O"]);
    const [secondRow, setSecondRow] = useState([null, null, null, null, null]);
    const [thirdRow, setThirdRow] = useState([null, null, null, null, null]);
    const [fourthRow, setFourthRow] = useState([null, null, null, null, null]);
    const [fifthRow, setFifthRow] = useState([null, null, null, null, null]);
    const [sixthRow, setSixthRow] = useState([null, null, null, null, null]);


    return (
        <div className="board">
        <div className="board-row">
            <Tile value={firstRow[0]} />
            <Tile value={firstRow[1]} />
            <Tile value={firstRow[2]} />
            <Tile value={firstRow[3]} />
            <Tile value={firstRow[4]} />
        </div>
        <div className="board-row">
            <Tile value={secondRow[0]} />
            <Tile value={secondRow[1]} />
            <Tile value={secondRow[2]} />
            <Tile value={secondRow[3]} />
            <Tile value={secondRow[4]} />
        </div>
        <div className="board-row">
            <Tile value={thirdRow[0]} />
            <Tile value={thirdRow[1]} />
            <Tile value={thirdRow[2]} />
            <Tile value={thirdRow[3]} />
            <Tile value={thirdRow[4]} />
        </div>
        <div className="board-row">
            <Tile value={fourthRow[0]} />
            <Tile value={fourthRow[1]} />
            <Tile value={fourthRow[2]} />
            <Tile value={fourthRow[3]} />
            <Tile value={fourthRow[4]} />
        </div>
        <div className="board-row">
            <Tile value={fifthRow[0]} />
            <Tile value={fifthRow[1]} />
            <Tile value={fifthRow[2]} />
            <Tile value={fifthRow[3]} />
            <Tile value={fifthRow[4]} />
        </div>
        <div className="board-row">
            <Tile value={sixthRow[0]} />
            <Tile value={sixthRow[1]} />
            <Tile value={sixthRow[2]} />
            <Tile value={sixthRow[3]} />
            <Tile value={sixthRow[4]} />
        </div>
    </div>
    
    );
}
