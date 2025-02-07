import axios, {AxiosRequestConfig} from "axios";

//Generic Hook for fetching data
export interface FetchResponse<T> {
    count: number;
    results: T[];
}

const api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'43325954bc8c44459682ed0bf164bb35'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = async (config: AxiosRequestConfig) => {
        const res = await api.get<FetchResponse<T>>(this.endpoint, config)
        return res.data
    }
}

export default APIClient;