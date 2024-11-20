import React from 'react';
import logo from '../assets/logo.webp';
import {Navbar, Container, Button, Row, Col} from 'react-bootstrap';
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
                backgroundColor: `${darkMode ? ' #296ca4' : 'gold'}`
            }}
            >
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo" style={{height: '40px'}}/>
                        Navbar
                    </Navbar.Brand>
                    <ColorMode isDarkMode={darkMode} toggleTheme={onClick}/>
                </Container>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12} lg={6} className="p-4"
                         style={{
                             backgroundColor: `${ darkMode ? '#343a40' : '#F3EFEFFF'}`
                         }}
                         gap="4"
                    >
                        <h2>Main Content</h2>
                        <GameGrid/>
                    </Col>


                    <Col lg={6} className="p-4 text-white d-none d-lg-block"
                         style={{
                             backgroundColor: `${ darkMode ? '#343a40' : '#4A95E0FF'}`
                         }}
                    >
                        <h3>Aside Section</h3>
                        <p>This is the aside section, which only takes up 50% of the screen width on large and
                            extra-large screens.</p>
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default NavBar;
