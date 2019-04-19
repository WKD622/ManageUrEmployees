export const REQUEST_ADD_NEW_EVENT = "REQUEST_ADD_NEW_EVENT";
export const requestAddEvent = () => ({
    type: REQUEST_ADD_NEW_EVENT,
});

export const RECEIVE_ADD_NEW_EVENT = "RECEIVE_ADD_NEW_EVENT";
export const receiveAddEvent = (event) => ({
    type: RECEIVE_ADD_NEW_EVENT,
    data: {
        event: event,
    }
});

export const REQUEST_REMOVE_EVENT = "REQUEST_REMOVE_EVENT";
export const requestRemoveEvent = () => ({
    type: REQUEST_REMOVE_EVENT,
});

export const RECEIVE_REMOVE_EVENT = "RECEIVE_REMOVE_EVENT";
export const receiveRemoveEvent = (id) => ({
    type: RECEIVE_REMOVE_EVENT,
    data: {
        id: id,
    }
});

export const REQUEST_EDIT_EVENT = "REQUEST_EDIT_EVENT";
export const requestEditEvent = () => ({
    type: REQUEST_EDIT_EVENT,
});

export const RECEIVE_EDIT_EVENT = "RECEIVE_EDIT_EVENT";
export const receiveEditEvent = (event) => ({
    type: RECEIVE_EDIT_EVENT,
    data: {
        event: event,
    }
});

export const REQUEST_API_DATA_EVENT = "REQUEST_API_DATA_EVENT";
export const requestApiDataEvent = () => ({
    type: REQUEST_API_DATA_EVENT,
});

export const RECEIVE_API_DATA_EVENT = "RECEIVE_API_DATA_EVENT";
export const receiveApiDataEvent = (events) => ({
    type: RECEIVE_API_DATA_EVENT,
    data: {
        events: events,
    }
});

