import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ea10b610-983d-4f7a-aac7-a88bb5fb5d41"
    },
})

export const usersAPI = {
    getFriends() {
        return (
            instance.get(`users?page=1&count=5`).then(response => response.data))
    },
    slide(pageNumber) {
        return (
            instance.get(`users?page=${pageNumber}&count=5`)
        ).then(response => response.data)
    },
    unFollowUser(id) {
        return (instance.delete(`follow/${id}`)).then(response => response.data)
    },
    followUser(id) {
        return (instance.post(`follow/${id}`, {})).then(response => response.data)
    },
    setUser(id) {
        return (instance.get(`profile/${id}`)
        ).then(repsonse => repsonse.data)
    },
    isAuthMe() {
        return (instance.get(`/auth/me`))
    },
    currentPage(id) {
        return (instance.get(`profile/${id}`)).then(response => response.data)
    },
    statusGet(id) {
        return (instance.get((`profile/status/${id}`)))
    },
    statusSet(status) {
        return (instance.put((`profile/status`), { status: status }))
    }
}