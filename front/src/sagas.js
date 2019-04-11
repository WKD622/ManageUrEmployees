import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_API_DATA_EMPLOYEES, receiveApiDataEmployees} from "./actions";
import {fetchData} from './api';

function* getApiData(action) {
    const data = yield call(fetchData);
    yield put(receiveApiDataEmployees(data));
}

export default function* mySaga() {
    console.log("mySaga");
    yield takeLatest(REQUEST_API_DATA_EMPLOYEES, getApiData);
}
