import React, {useState} from "react";
import NavBar from "./components/NavBar";
import {Col, Container, Row, Stack} from "react-bootstrap";
import {Genre} from "./hooks/useGenres";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import {useTheme} from "./components/ThemeContext";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

const App = () => {
    const {isDarkMode} = useTheme();
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    const OnselectGenre = (genre: Genre) => {
        setGameQuery({...gameQuery, genreId: genre.id});
    };

    const onSelectPlatform = (platform: Platform) => {
        setGameQuery({...gameQuery, platformId: platform.id});
    };

    const onSelectSort = (sortOrder: string) => {
        setGameQuery({...gameQuery, sortOrder});
    };

    const onSearchText = (searchText: string) => {
        setGameQuery({...gameQuery, searchText});
    };

    return (
        <>
            <NavBar onSearchText={onSearchText}/>
            <Container fluid>
                <Row>
                    {/*Aside*/}
                    <Col
                        lg={2}
                        md={2}
                        className="p-4 text-white d-none d-lg-block"
                        style={{
                            backgroundColor: isDarkMode ? "" : "#e6f8eb",
                            position: "sticky",
                            top: "30px",
                        }}
                    >
                        <div style={{color: isDarkMode ? "white" : "black"}}>
                            <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={OnselectGenre}/>
                        </div>
                    </Col>
                    {/* Main Content Area */}
                    <Col
                        xs={12}
                        md={12}
                        lg={10}
                        className="p-4"
                        style={{
                            backgroundColor: isDarkMode ? "" : "#e6f8eb",
                        }}
                    >
                        <Container fluid className="d-flex flex-column align-items-start p-0">
                            <GameHeading gameQuery={gameQuery}/>
                            <Stack direction="horizontal" gap={4} className="mb-3">
                                <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                                  onSelectPlatform={onSelectPlatform}/>
                                <SortSelector onSelectSortOder={onSelectSort} sortOrder={gameQuery.sortOrder}/>
                            </Stack>
                            <GameGrid darkMode={isDarkMode} gameQuery={gameQuery}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
