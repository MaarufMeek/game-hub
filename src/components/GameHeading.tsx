import {GameQuery} from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
    const genre = useGenre(gameQuery.genreId)
    const platform = usePlatform(gameQuery.platformId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <h1 className="fw-bold h-font">{heading}</h1>
    )
}

export default GameHeading;