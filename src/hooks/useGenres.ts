import genres from "../data/genres";
import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 86_400_000, //24hr
    initialData: genres,
})

export default useGenres