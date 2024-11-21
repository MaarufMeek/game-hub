import React, {useState} from "react";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Main from "./components/Main";
import {Container, Row} from "react-bootstrap";


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <NavBar onClick={toggleTheme} darkMode={isDarkMode}/>
            <Container fluid>
                <Row>
                    <Aside darkMode={isDarkMode}/>
                    <Main darkMode={isDarkMode}/>
                </Row>
            </Container>

        </>
    );
};

export default App;
