import {Game} from "../hooks/useGames";
import {Card, Stack} from "react-bootstrap";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-urls";
import {useTheme} from "./ThemeContext";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    const {isDarkMode} = useTheme();
    return (
        <Card
            style={{backgroundColor: `${isDarkMode ? '#282c34' : '#92e6a7'}`}}
              className="card-styles"
        >
            <Card.Img
                variant="top"
                src={getCroppedImageUrl(game.background_image)}
                className="card-img"
            />

            <Card.Body>
                <Stack direction="horizontal"
                       className="align-items-center justify-content-between mb-3"
                >
                    <PlatformIconList
                        platform={game.parent_platforms
                            .map((p) => p.platform)}
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
