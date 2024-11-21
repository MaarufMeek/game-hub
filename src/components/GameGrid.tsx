import useGames from "../hooks/useGames";
import {Col, Container, Row} from "react-bootstrap";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


interface Props {
    darkMode: boolean
}

const GameGrid = ({darkMode}: Props) => {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <>
            {error && <p className="text-danger">{error}</p>}
            <Container>
                <Row className="g-4">
                    {isLoading && skeletons.map(skeleton =>
                        <Col xs={12} sm={6} md={4}>
                            <GameCardSkeleton key={skeleton}/>
                        </Col>
                    )}
                    {games.map(game => (
                        <Col xs={12} sm={6} md={4} key={game.id}>
                            <GameCard game={game} darkMode={darkMode}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default GameGrid;
