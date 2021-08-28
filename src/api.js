import axios from 'axios';

const connectBack = axios.create({
    baseURL: "https://8k7dteeldk.execute-api.us-east-1.amazonaws.com/dev/api"
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
    return data;

}

const API = {getNews, getNewsById};
export default API;