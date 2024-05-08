import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = "http://localhost:3000";
// const baseURL = "https://api-breakingnews-w63s.onrender.com";

export function getAllNews() {
    const response = axios.get(`${baseURL}/news`);
    return response;
}

export function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`);
    return response;
}

export function searchNews(title) {
    const response = axios.get(`${baseURL}/news/search?title=${title}`);
    return response;
}

export function getAllNewsByUser() {
    const response = axios.get(`${baseURL}/news/byuser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    });
    return response;
}