import axios from 'axios';

// const baseURL = "http://localhost:3000";
const baseURL = "https://api-breakingnews-w63s.onrender.com";

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

function generateUserName(name) {
    const userName = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${userName}#${randomNumber}`;
}