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

    if(error) return <p>{error.message}</p>
    return (
        <Container fluid className="p-0">
            <Row className="g-4 align-items-stretch">
                {isLoading &&
                    skeletons.map((_, index) => (
                        <Col xs={12} sm={6} md={4} xlg={3} key={index} className="h-100">
                            <GameCardSkeleton/>
                        </Col>
                    ))}
                {data?.results.map((game) => (
                    <Col xs={12} sm={6} md={4} xlg={3} key={game.id} className="h-100">
                        <GameCard key={game.id} game={game}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default GameGrid;
