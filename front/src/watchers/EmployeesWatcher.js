import {
    REQUEST_ADD_NEW_EMPLOYEE,
    REQUEST_REMOVE_EMPLOYEE,
    REQUEST_EDIT_EMPLOYEE,
    REQUEST_API_DATA_EMPLOYEES,
} from "../actions/employees_actions";
import {
    getEmployeesDataSaga,
    editEmployeeSaga,
    removeEmployeeSaga,
    addEmployeeSaga,
} from "../sagas/EmployeesSagas"

import {
    takeLatest,
} from 'redux-saga/effects'


export function* watchReceiveApiDataEmployees() {
    yield takeLatest(REQUEST_API_DATA_EMPLOYEES, getEmployeesDataSaga);
}

export function* watchReceiveEditEmployee() {
    yield takeLatest(REQUEST_EDIT_EMPLOYEE, editEmployeeSaga);
}

export function* watchReceiveRemoveEmployee() {
    yield takeLatest(REQUEST_REMOVE_EMPLOYEE, removeEmployeeSaga);
}

export function* watchReceiveAddNewEmployee() {
    yield takeLatest(REQUEST_ADD_NEW_EMPLOYEE, addEmployeeSaga);
}

