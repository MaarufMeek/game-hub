import {useQuery} from "@tanstack/react-query";
import apiClient, {FetchResponse} from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: async () => {
        const res = await apiClient
            .get<FetchResponse<Platform>>('/platforms/lists/parents')
        return res.data
    },
    staleTime: 84_400_000, //24hr
    initialData: { count: platforms.length, results: platforms }
})


export default usePlatforms;