import { USER_FETCH, USER_SUCCESS, USER_ERROR, USER_PAGE } from './userTypes'

export const userFetch = () => {
    return {
        type: USER_FETCH
    }
}

export const userSucess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users
    }
}

export const userError = (error) => {
    return {
        type: USER_ERROR,
        payload: error
    }
}

export const displayUser = (flag) => {
    return {
        type: USER_PAGE,
        payload: flag
    }
}