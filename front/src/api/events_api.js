import fetch from "cross-fetch";

import store from '../store'
import {
    receiveAddEvent,
    receiveApiDataEvent, receiveEditEvent, receiveRemoveEvent,
    requestAddEvent,
    requestApiDataEvent,
    requestEditEvent,
    requestRemoveEvent
} from "../actions/events_actions";

export function fetchEvents() {
    return function (dispatch) {
        console.log(dispatch);
        dispatch(requestApiDataEvent());
        return fetch('http://127.0.0.1:8000/api/events/')
            .then(
                response => response.json(),
                error => console.log('An error occured', error)
            )
            .then(json =>
                dispatch(receiveApiDataEvent(json))
            )
    }
}

export function putEvent(event) {
    store.dispatch(requestEditEvent());
    return fetch('http://127.0.0.1:8000/api/events/' + event.id + "/", {
        method: 'PUT',
        body: JSON.stringify(event), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
            response => response.json(),
            error => console.log('An error occured', error)
        )
        .then(
            store.dispatch(receiveEditEvent(event))
        )
}

export function postEvents(event) {
    console.log(event);
    store.dispatch(requestAddEvent());
    return fetch('http://127.0.0.1:8000/api/events/', {
        method: 'POST',
        body: JSON.stringify(event), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
            response => response.json(),
            error => console.log('An error occured', error)
        )
        .then(
            store.dispatch(receiveAddEvent(event))
        )
}


export function deleteEvent(id) {
    store.dispatch(requestRemoveEvent());
    return fetch('http://127.0.0.1:8000/api/events/' + id + '/', {
        method: 'DELETE',
        body: JSON.stringify(id), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(
            response => response.json(),
            error => console.log('An error occured', error)
        )
        .then(
            store.dispatch(receiveRemoveEvent(id))
        )
}