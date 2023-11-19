import axios from "axios";

const instanceAPI = axios.create({
    baseURL: 'https://run.mocky.io/'
})

export default instanceAPI