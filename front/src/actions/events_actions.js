export const ADD_NEW_EVENT = "ADD_NEW_EVENT";
export const addEvent = (event) => ({
    type: ADD_NEW_EVENT,
    data: {
        event,
    }
});

export const REMOVE_EVENT = "REMOVE_EVENT";
export const removeEvent = (id) => ({
    type: REMOVE_EVENT,
    data: {
        id,
    }
});

export const EDIT_EVENT = "EDIT_EVENT";
export const editEvent = (event) => ({
    type: EDIT_EVENT,
    data: {
        event,
    }
});

export const REQUEST_API_DATA_EVENTS = "REQUEST_API_DATA_EVENTS";
export const requestApiDataEvents = () => ({
    type: REQUEST_API_DATA_EVENTS
});

export const RECEIVE_API_DATA_EVENTS = "RECEIVE_API_DATA_EVENTS";
export const receiveApiDataEvents = (data) => ({
    type: RECEIVE_API_DATA_EVENTS,
    data
});