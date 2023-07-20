import React from "react";
import { ReactComponent as Help } from "./Assets/help.svg";
import { ReactComponent as Stats } from "./Assets/stats.svg";
import { ReactComponent as Settings } from "./Assets/settings.svg";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className="nav-bar-hamburger">
                <div />
                <div />
                <div />
            </div>
            <h1>
                <span>W</span>ordle
            </h1>
            <div className="nav-bar-right">
                <Help className="nav-bar-help" />
                <Stats className="nav-bar-stats" />
                <Settings className="nav-bar-settings" />
                <button className="nav-bar-subscribe">
                    Subscribe to Games
                </button>
            </div>
        </div>
    );
}
