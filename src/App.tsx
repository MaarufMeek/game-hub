import React, {useState} from "react";
import NavBar from "./components/NavBar";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {Genre} from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const OnselectGenre = (genre: Genre) => {
        setGameQuery({...gameQuery, genre})
    }

    const onSelectPlatform = (platform: Platform) => {
        setGameQuery({...gameQuery, platform})
    }

    const onSelectSort = (sortOrder: string) => {
        setGameQuery({...gameQuery, sortOrder})
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
                            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={OnselectGenre}/>
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
                        {gameQuery.genre ? <h1 className="mx-3">{gameQuery.genre.name}</h1> :
                            <h1 className="mx-3">All Games</h1>}
                        <Stack direction="horizontal" gap={4} className="mb-4 px-3">
                            <PlatformSelector selectedPlatform={gameQuery.platform}
                                              onSelectPlatform={onSelectPlatform}/>
                            <SortSelector
                                onSelectSortOder={onSelectSort}
                                sortOrder={gameQuery.sortOrder}
                            />
                        </Stack>
                        <GameGrid darkMode={isDarkMode}
                                  gameQuery={gameQuery}
                        />
                    </Col> </Row>
            </Container>
        </>
    );
};

export default App;
