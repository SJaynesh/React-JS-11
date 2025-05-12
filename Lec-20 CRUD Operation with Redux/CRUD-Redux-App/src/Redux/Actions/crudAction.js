import { ADD, DELETE, UPDATE } from "./actionTypes"

export const addUser = (data) => {
    return {
        type: ADD,
        payload: data
    }
}

export const deleteUser = (index) => {
    return {
        type: DELETE,
        payload: index
    }
}

export const updateUser = (data) => {
    return {
        type : UPDATE,
        payload: data
    }
}