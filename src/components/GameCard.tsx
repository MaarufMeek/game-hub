import {Game} from "../hooks/useGames";
import {Card, Stack} from "react-bootstrap";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
    game: Game;
    darkMode: boolean
}

const GameCard = ({game, darkMode}: Props) => {
    return (
        <Card style={{backgroundColor: `${darkMode ? '#30343f' : '#caf0f8'}`}}
              className="card-styles"
        >
            <Card.Img
                variant="top"
                src={getCroppedImageUrl(game.background_image)}
                className="card-img"
            />

            <Card.Body>
                <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
                    <PlatformIconList
                        platform={game.parent_platforms
                            .map((p) => p.platform)}
                        darkMode={darkMode}
                    />
                    <CriticScore score={game.metacritic}/>
                </Stack>
                <Card.Title>{game.name}</Card.Title>
                {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
    );
};

export default GameCard;
