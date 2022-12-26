import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "c3005349-c6b9-4185-bb4f-ef5cb9dbb1ee"
    }
});
