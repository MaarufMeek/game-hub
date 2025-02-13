import useGames from "../hooks/useGames";
import {Button, Col, Container, Row} from "react-bootstrap";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import {GameQuery} from "../App";
import React from "react";


interface Props {
    darkMode: boolean;
    gameQuery: GameQuery | null;
}

const GameGrid = ({darkMode, gameQuery}: Props) => {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
    } = useGames(gameQuery);
    const skeletons = [...Array(12)];

    const fetchedGamesCount = data?.pages
        .reduce((total, page) => total + page.results.length, 0) || 0;

    if (error) return <p>{error.message}</p>
    return (
        <>
            <Container fluid className="p-0">
                <Row className="g-4 align-items-stretch">
                    {isLoading &&
                        skeletons.map((_, index) => (
                            <Col xs={12} sm={6} md={4} xlg={3} key={index} className="h-100">
                                <GameCardSkeleton/>
                            </Col>
                        ))}
                    {data?.pages.map((page, index) =>
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <Col xs={12} sm={6} md={4} xlg={3} key={game.id} className="h-100">
                                    <GameCard key={game.id} game={game}/>
                                </Col>
                            ))}
                        </React.Fragment>)}
                </Row>
            </Container>
            {hasNextPage && (
                <Button
                    className="btn btn-dark btn-outline-secondary text-white mt-4"
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )}


        </>
    )
        ;
};

export default GameGrid;
