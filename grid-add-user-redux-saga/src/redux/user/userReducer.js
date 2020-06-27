import {USER_FETCH,USER_SUCCESS,USER_ERROR,USER_PAGE} from './userTypes'

const initialUserState = {
    loading : false,
    users : [],
    error : '',
    showGrid : false
}


const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_FETCH : return {
            ...state,
            loading : true
        }
        case USER_SUCCESS : return {
            ...state,
            loading : false,
            users : action.payload,
            showGrid : true
        }
        case USER_ERROR : return {
            ...state,
            loading : false,
            error : action.payload
        }
        case USER_PAGE : return {
            ...state,
            showGrid : action.payload
        }
        default : return state
    }
}

export default userReducer