import { takeLatest, put, call } from 'redux-saga/effects'
import { userSucess, userError, userFetch, displayUser } from '../user/userAction'
import * as apis from '../user/api'
import Data from '../user/Constatnt'

function* displayUserPage(action){
    yield put(displayUser(action.payload));
}

function* fetchRootUser() { 
    try {
        yield put(userFetch());
        const response = yield call(apis.fetchAll);
        yield put(userSucess(response.data));
    } catch (error) {
        yield put(userError(error.message));
    }
}

function* saveUserData(action) {
    try {
        yield call(apis.saveUserData,action.user);
        const response = yield call(apis.fetchAll);
        yield put(userSucess(response.data));
    } catch (error) {
        yield put(userError(error.message));
    }
}

export function* rootSaga() {
    yield takeLatest(Data.Get_USERS,fetchRootUser);
    yield takeLatest(Data.SAVE_USER,saveUserData);
    yield takeLatest(Data.DISPLAY_USER_PAGE,displayUserPage);
}