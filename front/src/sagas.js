import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_API_DATA, receiveApiData} from "./actions";
import {fetchData} from './api';

function* getApiData(action) {
    try {
        console.log("getApiData");
        const data = yield call(fetchData);
        console.log(data);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    console.log("mySaga");
    yield takeLatest(REQUEST_API_DATA, getApiData);
}