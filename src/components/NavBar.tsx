import React from "react";
import logo from "../assets/logo.webp";
import {Col, Container, Navbar, Row, Stack} from "react-bootstrap";
import ColorMode from "./colorMode";
import {FaMoon, FaSun} from "react-icons/fa";
import SearchInput from "./SearchInput";

interface Props {
    onClick: () => void;
    darkMode: boolean;
    onSearchText: (searchText: string) => void;
}

const NavBar = ({onClick, darkMode, onSearchText}: Props) => {
    return (
        <Navbar
            expand="lg"
            style={{
                backgroundColor: `${darkMode ? "#212529" : "white"}`,
            }}
            className="nav-content"
        >
            <Container fluid>
                <Row className="align-items-center w-100">
                    {/* Logo */}
                    <Col xs={2} md={2} lg={1}>
                        <Navbar.Brand>
                            <img src={logo} alt="logo" style={{height: "60px"}}/>
                        </Navbar.Brand>
                    </Col>

                    {/* SearchInput */}
                    <Col xs={7} md={7} lg={10} className="my-2 my-md-0">
                        <SearchInput onSearch={onSearchText}/>
                    </Col>

                    {/* Theme and Icons */}
                    <Col xs={3} md={3} lg={1} className="text-end">
                        <Stack direction="horizontal" gap={3} className="justify-content-end">
                            <ColorMode isDarkMode={darkMode} toggleTheme={onClick}/>
                            {darkMode ? (
                                <FaMoon color="goldenrod" size={20}/>
                            ) : (
                                <FaSun color="darkblue" size={20}/>
                            )}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default NavBar;
