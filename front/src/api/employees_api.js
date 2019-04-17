import fetch from "cross-fetch";
import {
    requestEditEmployee,
    receiveApiDataEmployees,
    requestApiDataEmployees,
    receiveEditEmployee,
    receiveAddEmployee,
    requestAddEmployee,
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