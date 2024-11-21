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
                style={{
                    height: '80%', // Start with zero height
                    paddingTop: '0', // Aspect ratio of 16:9
                    objectFit: 'cover',
                    width: '100%', // Ensure full width
                }}
            />

            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Stack direction="horizontal" className="align-items-center justify-content-between">
                    <PlatformIconList
                        platform={game.parent_platforms
                            .map((p) => p.platform)}
                        darkMode={darkMode}
                    />
                    <CriticScore score={game.metacritic}/>
                </Stack>
                {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
        </Card>
    );
};

export default GameCard;
