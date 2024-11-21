import useData from "./useData";
import {Genre} from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}


const useGames = (SelectedGenre: Genre | null) => useData<Game>('/games',
    {params: {genres: SelectedGenre?.id}}, [SelectedGenre?.id]);
export default useGames;