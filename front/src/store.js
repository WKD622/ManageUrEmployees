import {createStore, applyMiddleware} from "redux/es/redux";
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas'
import index from "./reducers/index";

// const sagaMiddleware = createSagaMiddleware();

export default createStore(
    index,
    // applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run(mySaga);