import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'
const instance = axios.create({ // чтобы не дублировать код, создали переменную
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', // автоматически будет дописываться эта часть адреса
    headers: {
        "API-KEY": '5389ff3b-d7dd-4e56-93f8-9b821932b354'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followUsers(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUsers(id: number) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put<updateStatusType>(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    }
}

type updateStatusType = {
    resultCode:number
    messages: string[]
    data:{}
}

/*
export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(baseURL + `users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
            return response.data
        })
}
*/