import {
    receiveApiDataEmployees,
    receiveAddEmployee,
    receiveEditEmployee,
    receiveRemoveEmployee,
    REQUEST_ADD_NEW_EMPLOYEE,
    REQUEST_REMOVE_EMPLOYEE,
    REQUEST_EDIT_EMPLOYEE,
    REQUEST_API_DATA_EMPLOYEES,
} from "../actions/employees_actions";
import {
    fetchEmployees,
    putEmployee,
    deleteEmployee,
    postEmployee,
} from "../api/employees_api"
import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects'


function* getEmployeesData(action) {
    try {
        const employees = yield call(fetchEmployees);
        yield put(receiveApiDataEmployees(employees));
    } catch (e) {
        console.log(e)
    }
}

function* editEmployee(action) {
    try {
        console.log("edit employee");
        const employee = yield call(putEmployee, [action.data]);
        console.log(employee);
        yield put(receiveEditEmployee, employee);
    } catch (e) {
        console.log(e)
    }
}

function* removeEmployee(action) {
    console.log(action.data);
    try {
        const employee = yield call(deleteEmployee, [action.data.pesel]);
        yield put(receiveRemoveEmployee(employee));
    } catch (e) {
        console.log(e)
    }
}

function* addEmployee(action) {
    console.log(action);
    try {
        const employee = yield call(postEmployee, [action.data]);
        console.log(employee);
        yield put(receiveAddEmployee(action.data));
    } catch (e) {
        console.log(e)
    }
}

export function* watchReceiveApiDataEmployees() {
    yield takeLatest(REQUEST_API_DATA_EMPLOYEES, getEmployeesData);
}

export function* watchReceiveEditEmployee() {
    yield takeLatest(REQUEST_EDIT_EMPLOYEE, editEmployee);
}

export function* watchReceiveRemoveEmployee() {
    yield takeLatest(REQUEST_REMOVE_EMPLOYEE, removeEmployee);
}

export function* watchReceiveAddNewEmployee() {
    yield takeLatest(REQUEST_ADD_NEW_EMPLOYEE, addEmployee);
}

