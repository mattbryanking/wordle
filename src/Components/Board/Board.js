import React from "react";
import { Tile } from "./Tile/Tile";
import "./Board.css";

export default function Board() {
    return (
        <div className="board">
            <div className="board-row">
                <Tile value="P" />
                <Tile value="E" />
                <Tile value="N" />
                <Tile value="I" />
                <Tile value="S" />
            </div>
            <div className="board-row">
                <Tile value="P" />
                <Tile value="E" />
                <Tile value="N" />
                <Tile value="I" />
                <Tile value="S" />
            </div>
            <div className="board-row">
                <Tile value="P" />
                <Tile value="E" />
                <Tile value="N" />
                <Tile value="I" />
                <Tile value="S" />
            </div>
            <div className="board-row">
                <Tile value="P" />
                <Tile value="E" />
                <Tile value="N" />
                <Tile value="I" />
                <Tile value="S" />
            </div>
            <div className="board-row">
                <Tile value="P" />
                <Tile value="E" />
                <Tile value="N" />
                <Tile value="I" />
                <Tile value="S" />
            </div>
            <div className="board-row">
                <Tile value="P" />
                <Tile value="E" />
                <Tile value="N" />
                <Tile value="I" />
                <Tile value="S" />
            </div>
        </div>
    );
}
