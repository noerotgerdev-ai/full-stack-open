import axios from 'axios'
const baseURL = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
    const request = axios.get(`${baseURL}api/all`)
    return request.then((res => res.data))
}

const getOne = (name) => {
    const request = axios.get(`${baseURL}api/name/${name}`)
    return request.then((res => res.data))
}

export default {getAll, getOne}