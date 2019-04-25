import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import index from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import {
    watchReceiveApiDataEmployees,
    watchReceiveAddNewEmployee,
    watchReceiveEditEmployee,
    watchReceiveRemoveEmployee
} from './watchers/EmployeesWatcher';
import {all} from "redux-saga/effects";

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    index,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            sagaMiddleware,
        )
    ),
);

function* rootSaga() {
    yield all([
        watchReceiveApiDataEmployees(),
        watchReceiveEditEmployee(),
        watchReceiveRemoveEmployee(),
        watchReceiveAddNewEmployee(),
    ])
}

sagaMiddleware.run(rootSaga);
// store.dispatch(fetchEvents()).then(() => console.log(store.getState()));
export default store;