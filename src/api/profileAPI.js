import { instance } from "./api";

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
}