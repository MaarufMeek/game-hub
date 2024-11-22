import useData from "./useData";
import {Genre} from "./useGenres";
import {Platform} from "./usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}


const useGames = (SelectedGenre: Genre | null, selectedPlatform: Platform | null) =>
    useData<Game>('/games',
        {
            params: {
                genres: SelectedGenre?.id,
                platforms: selectedPlatform?.id
            }
        },
        [SelectedGenre?.id, selectedPlatform?.id]);
export default useGames;