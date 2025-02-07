import genres from "../data/genres";
import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: async () =>  {
        const res = await apiClient.get<FetchResponse<Genre>>('/genres')
        return res.data;
    },
    staleTime: 86_400_000, //24hr
    initialData: {count: genres.length, results: genres}
})

export default useGenres