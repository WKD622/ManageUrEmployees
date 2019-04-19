import {
    REQUEST_ADD_NEW_EVENT,
    REQUEST_REMOVE_EVENT,
    REQUEST_EDIT_EVENT,
    RECEIVE_API_DATA_EVENT,
    REQUEST_API_DATA_EVENT,
    RECEIVE_EDIT_EVENT,
    RECEIVE_ADD_NEW_EVENT,
    RECEIVE_REMOVE_EVENT,
} from "../actions/events_actions";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: [],
    errors: {},
};


export default (state = initialState, {type, data}) => {
    switch (type) {
        case REQUEST_ADD_NEW_EVENT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });

        case RECEIVE_ADD_NEW_EVENT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                data: [...state.data]
            });

        case REQUEST_REMOVE_EVENT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });

        case RECEIVE_REMOVE_EVENT:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...state.data.filter(event => event.id !== data.id)]
            });

        case REQUEST_EDIT_EVENT:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...state.data]
            });

        case RECEIVE_EDIT_EVENT:
            let name = data.event.name;
            let description = data.event.description;
            let datetime = data.event.datetime;
            let id = data.event.id;

            const edited_event = {
                name: name,
                description: description,
                datetime: datetime,
            };

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...state.data.filter(event => event.id !== id), edited_event]
            });

        case RECEIVE_API_DATA_EVENT:
            console.log(data.events);
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...data.events]
            });
        case REQUEST_API_DATA_EVENT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        default:
            return state || [];
    }
};
