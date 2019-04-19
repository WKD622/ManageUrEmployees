import fetch from "cross-fetch";
import {
    requestEditEmployee,
    receiveApiDataEmployees,
    requestApiDataEmployees,
    receiveEditEmployee,
    receiveAddEmployee,
    requestAddEmployee,
    requestRemoveEmployee,
    receiveRemoveEmployee,
} from "../actions/employees_actions";
import store from '../store'

export function fetchEmployees() {
    return function (dispatch) {
        console.log(dispatch);
        dispatch(requestApiDataEmployees());
        return fetch('http://127.0.0.1:8000/api/employees/')
            .then(
                response => response.json(),
                error => console.log('An error occured', error)
            )
            .then(json =>
                dispatch(receiveApiDataEmployees(json))
            )
    }
}

export function putEmployee(employee) {
    store.dispatch(requestEditEmployee());
    return fetch('http://127.0.0.1:8000/api/employees/' + employee.pesel + "/", {
        method: 'PUT',
        body: JSON.stringify(employee), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
            response => response.json(),
            error => console.log('An error occured', error)
        )
        .then(
            store.dispatch(receiveEditEmployee(employee))
        )
}

export function postEmployee(employee) {
    console.log(employee);
    store.dispatch(requestAddEmployee());
    return fetch('http://127.0.0.1:8000/api/employees/', {
        method: 'POST',
        body: JSON.stringify(employee), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
            response => response.json(),
            error => console.log('An error occured', error)
        )
        .then(
            store.dispatch(receiveAddEmployee(employee))
        )
}


export function deleteEmployee(pesel) {
    store.dispatch(requestRemoveEmployee());
    return fetch('http://127.0.0.1:8000/api/employees/' + pesel + '/', {
        method: 'DELETE',
        body: JSON.stringify(pesel), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
            response => response.json(),
            error => console.log('An error occured', error)
        )
        .then(
            store.dispatch(receiveRemoveEmployee(pesel))
        )
}