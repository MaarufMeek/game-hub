import useGames from "../hooks/useGames";
import {Col, Container, Row} from "react-bootstrap";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import {GameQuery} from "../App";


interface Props {
    darkMode: boolean;
    gameQuery: GameQuery | null;
}

const GameGrid = ({darkMode, gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [...Array(12)];

    return (
        <>
            <Container>
                <Row className="g-3">
                    {isLoading && skeletons.map((_, index) => (
                        <Col xs={12} sm={6} md={4} key={index}>
                            <GameCardSkeleton/>
                        </Col>
                    ))}
                    {data.map(game => (
                        <Col xs={12} sm={6} md={4} key={game.id}>
                            <GameCard key={game.id} game={game} darkMode={darkMode}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};


export default GameGrid;
