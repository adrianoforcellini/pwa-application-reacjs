import axios from 'axios';

const connectBack = axios.create({
    baseURL: "http://localhost:2000/api"
})


const params = {
    header: {
        'Acccept': 'application/json',
        'Content-Type': 'application/json',
    }
}


const getNews = async (subject) => {
    const fetchAPI = await connectBack(`${subject}`, params)
    const { data } = fetchAPI;
    return data;

}

const getNewsById = async (subject, id) => {
    const fetchAPI = await connectBack(`${subject}/${id}`, params)
    const { data } = fetchAPI;
    console.log('aaa', data)
    return data;

}

const API = {getNews, getNewsById};
export default API;