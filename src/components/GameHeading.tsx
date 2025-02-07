import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {

    const {data: genres} = useGenres();
    const {data: platforms} = usePlatforms();
    const genre = genres?.results.find(genre => genre?.id === gameQuery.genreId)
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId)
    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
        <h1 className="fw-bold h-font">{heading}</h1>
    )
}

export default GameHeading;