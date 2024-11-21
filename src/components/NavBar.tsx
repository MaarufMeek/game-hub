import React from 'react';
import logo from '../assets/logo.webp';
import {Col, Container, Navbar, Row} from 'react-bootstrap';
import ColorMode from "./colorMode";
import GameGrid from "./GameGrid";


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
            <Container fluid>
                <Row>
                    <Col lg={2} className="p-4 text-white d-none d-lg-block"
                         style={{
                             backgroundColor: `${darkMode ? '' : 'white'}`
                         }}
                    >
                        <div style={{color: `${darkMode ? 'white' : 'black'}`}}>
                            <h3>Aside Section</h3>
                        </div>
                    </Col>

                    <Col xs={12} md={12} lg={10} className="p-4"
                         style={{
                             backgroundColor: `${darkMode ? '' : 'white'}`
                         }}
                         gap="4"
                    >
                        <h2>Main Content</h2>
                        <GameGrid darkMode={darkMode}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NavBar;
