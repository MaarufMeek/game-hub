import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'43325954bc8c44459682ed0bf164bb35'
    }
})