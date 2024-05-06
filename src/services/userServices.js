import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = "http://localhost:3000";
// const baseURL = "https://api-breakingnews-w63s.onrender.com";

export function signUp(data) {
    delete data.confirmPassword;
    const body = {
        ...data, 
        username: generateUserName(data.name), 
        avatar: "https://i.imgur.com/xmI2QAo.jpg", 
        background: "https://i.imgur.com/XbRg9D7.png"
    };
    const response = axios.post(`${baseURL}/user/`, body);
    return response; 
}

export function signIn(data) {
    const response = axios.post(`${baseURL}/auth/`, data);
    return response;
}

export function userLogged() {
    // const id = "6632ed5b142c5bea40c9daaf"
    const response = axios.get(`${baseURL}/user/findById`, {
        headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
        }
    });
    return response;
}

function generateUserName(name) {
    const userName = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${userName}#${randomNumber}`;
}