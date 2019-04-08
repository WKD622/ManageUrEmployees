import {createStore, applyMiddleware} from "redux/es/redux";
import createSagaMiddleware from 'redux-saga'

import employees from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    employees,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);