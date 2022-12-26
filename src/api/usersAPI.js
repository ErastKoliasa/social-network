import { instance } from "./api";

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
}