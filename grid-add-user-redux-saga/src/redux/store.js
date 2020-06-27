import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReduce'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './saga/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(logger,sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store