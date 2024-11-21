import React from 'react';
import logo from '../assets/logo.webp';
import {Container, Navbar} from 'react-bootstrap';
import ColorMode from "./colorMode";


interface Props {
    onClick: () => void;
    darkMode: boolean;
}

const NavBar = ({onClick, darkMode}: Props) => {
    return (
        <>
            <Navbar expand="lg" style={{
                backgroundColor: `${darkMode ? '#212529' : 'white'}`,
            }}
            >
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo" style={{height: '60px'}}/>
                        Navbar
                    </Navbar.Brand>
                    <ColorMode isDarkMode={darkMode} toggleTheme={onClick}/>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
