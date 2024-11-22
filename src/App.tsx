import React, {useState} from "react";
import NavBar from "./components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import {Genre} from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/usePlatforms";


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const OnselectGenre = (genre: Genre) => {
        setSelectedGenre(genre)
    }

    const onSelectPlatform = (platform: Platform) => {
        setSelectedPlatform(platform)
    }

    return (
        <>
            <NavBar onClick={toggleTheme} darkMode={isDarkMode}/>
            <Container fluid>
                <Row>
                    {/*Aside*/}
                    <Col lg={2} className="p-4 text-white d-none d-lg-block"
                         style={{
                             backgroundColor: `${isDarkMode ? '' : 'white'}`,
                             position: "sticky",
                             top: '30px'
                         }}
                    >
                        <div style={{color: `${isDarkMode ? 'white' : 'black'}`}}>
                            <h1>Genres</h1>
                            <GenreList selectedGenre={selectedGenre} onSelectGenre={OnselectGenre}/>
                        </div>
                        <hr/>
                    </Col>

                    {/*Main*/}
                    <Col xs={12} md={12} lg={10} className="p-4"
                         style={{
                             backgroundColor: `${isDarkMode ? '' : 'white'}`
                         }}
                         gap="4"
                    >
                        {selectedGenre ? <h1 className="mx-3">{selectedGenre.name}</h1> :
                            <h1 className="mx-3">All Games</h1>}
                        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={onSelectPlatform}/>
                        <GameGrid darkMode={isDarkMode}
                                  selectedGenre={selectedGenre}
                                  selectedPlatform={selectedPlatform}
                        />
                    </Col> </Row>
            </Container>
        </>
    );
};

export default App;
