// import {call, put, takeLatest} from "redux-saga/effects";
// import {REQUEST_API_DATA_EMPLOYEES, receiveApiDataEmployees} from "./actions/employees_actions";
// import {fetchData} from './api/employees_api';
//
// function* getApiData(action) {
//     const data = yield call(fetchData);
//     yield put(receiveApiDataEmployees(data));
// }
//
// export default function* mySaga() {
//     console.log("mySaga");
//     yield takeLatest(REQUEST_API_DATA_EMPLOYEES, getApiData);
// }
