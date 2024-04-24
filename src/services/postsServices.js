import axios from "axios";

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