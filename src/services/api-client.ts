import axios from "axios";

//Generic Hook for fetching data
export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'43325954bc8c44459682ed0bf164bb35'
    }
})