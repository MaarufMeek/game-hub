import {useQuery} from "@tanstack/react-query";
import APIClient  from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 84_400_000, //24hr
    initialData: { count: platforms.length, results: platforms }
})


export default usePlatforms;