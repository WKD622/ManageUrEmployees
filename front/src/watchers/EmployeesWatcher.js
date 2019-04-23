import {receiveApiDataEmployees, REQUEST_API_DATA_EMPLOYEES} from "../actions/employees_actions";
import {fetchEmployees} from "../api/employees_api"
import {call, put, takeLatest} from 'redux-saga/effects'


function* getEmployeesData(action) {
    try {
        const employees = yield call(fetchEmployees);
        yield put(receiveApiDataEmployees(employees));
    } catch (e) {
        console.log(e)
    }
}

export default function* watchReceiveApiDataEmployees() {
    yield takeLatest(REQUEST_API_DATA_EMPLOYEES, getEmployeesData);
}
