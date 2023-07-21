import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider";
import { ReactComponent as Help } from "./Assets/help.svg";
import { ReactComponent as Stats } from "./Assets/stats.svg";
import { ReactComponent as Settings } from "./Assets/settings.svg";
import "./Navbar.css";

export default function Navbar() {
    // page theme
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className={darkMode ? "nav-bar nav-bar-dark" : "nav-bar"}>
            <div
                className={
                    darkMode
                        ? "nav-bar-hamburger nav-bar-hamburger-dark"
                        : "nav-bar-hamburger"
                }
            >
                <div />
                <div />
                <div />
            </div>
            <h1>
                <span>W</span>ordle
            </h1>
            <div className="nav-bar-right">
                <Help
                    className={
                        darkMode
                            ? "nav-bar-help nav-bar-help-dark"
                            : "nav-bar-help"
                    }
                />
                <Stats
                    onClick={() => setDarkMode(!darkMode)}
                    className={
                        darkMode
                            ? "nav-bar-stats nav-bar-stats-dark"
                            : "nav-bar-stats"
                    }
                />
                <Settings
                    className={
                        darkMode
                            ? "nav-bar-settings nav-bar-settings-dark"
                            : "nav-bar-settings"
                    }
                />
                <a
                    className={
                        darkMode
                            ? "nav-bar-subscribe nav-bar-subscribe-dark"
                            : "nav-bar-subscribe"
                    }
                    href="https://github.com/mattbryanking"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Subscribe to Games
                </a>
            </div>
        </div>
    );
}
