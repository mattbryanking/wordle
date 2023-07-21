import React, { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./ThemeProvider";
import Navbar from "./Components/Navbar/Navbar";
import Board from "./Components/Board/Board";
import Keyboard from "./Components/Keyboard/Keyboard";
import "./App.css";

function Content() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className={darkMode ? "App dark" : "App" }>
            <Navbar />
            <Board />
            <Keyboard />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    );
}

export default App;
