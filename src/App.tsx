import React, {useState} from "react";
import NavBar from "./components/NavBar";


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

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
