import * as axios from 'axios';

export const getFriends = () => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`, {
            withCredentials: true
        }))
}

export const slide = (pageNumber) => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`, {
            withCredentials: true
        })
    )
}