import axios from "axios";

export const linkAPI = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/', )
    return response.data;
}

export const getImg = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`, )
    return response.data;
}