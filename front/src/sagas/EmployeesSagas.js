import {deleteEmployee, fetchEmployees, postEmployee, putEmployee} from "../api/employees_api";
import {
    receiveAddEmployee,
    receiveApiDataEmployees,
    receiveEditEmployee,
    receiveRemoveEmployee
} from "../actions/employees_actions";

import {
    call,
    put,
} from 'redux-saga/effects'

export function* getEmployeesDataSaga(action) {
    try {
        const employees = yield call(fetchEmployees);
        yield put(receiveApiDataEmployees(employees));
    } catch (e) {
        console.log(e)
    }
}

export function* editEmployeeSaga(action) {
    try {
        console.error(action);
        const employee = yield call(putEmployee, action.data.employee);
        console.log(employee);
        yield put(receiveEditEmployee(employee));
    } catch (e) {
        console.error(e)
    }
}


export function* removeEmployeeSaga(action) {
    try {
        const pesel = yield call(deleteEmployee, action.data.pesel);
        yield put(receiveRemoveEmployee(pesel));
    } catch (e) {
        console.log(e)
    }
}

export function* addEmployeeSaga(action) {
    console.log(action);
    try {
        const employee = yield call(postEmployee, action.data.employee);
        yield put(receiveAddEmployee(employee));
    } catch (e) {
        console.log(e)
    }
}