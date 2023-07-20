import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Board from "./Components/Board/Board";
import Keyboard from "./Components/Keyboard/Keyboard";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Board />
            <Keyboard />
        </div>
    );
}

export default App;
