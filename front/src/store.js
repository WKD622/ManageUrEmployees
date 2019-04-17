import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware, compose} from 'redux'
import {fetchEmployees} from './api/employees_api'
import index from "./reducers/index";

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    index,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
        )
    ),
);

store.dispatch(fetchEmployees()).then(() => console.log(store.getState()));

export default store;