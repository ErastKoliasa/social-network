import { instance } from "./api"

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

