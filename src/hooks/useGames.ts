import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}


const useGames = (gameQuery: GameQuery | null) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: async () => {
            const res = await apiClient
                .get<FetchResponse<Game>>('/games', {
                    params: {
                        genres: gameQuery?.genre?.id,
                        parent_platforms: gameQuery?.platform?.id,
                        ordering: gameQuery?.sortOrder,
                        search: gameQuery?.searchText,
                    },
                })
            return res.data
        }
    })

export default useGames;