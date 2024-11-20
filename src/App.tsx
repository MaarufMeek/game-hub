import React, {useState, useEffect} from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <div className="no-margin-navbar">
                <NavBar onClick={toggleTheme} darkMode={isDarkMode}/>

            </div>
        </>
    );
};

export default App;
