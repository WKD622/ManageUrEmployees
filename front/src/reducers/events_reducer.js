import {ADD_NEW_EVENT, REMOVE_EVENT, EDIT_EVENT} from "../actions";

const initialState = {
    data: [
        {id: 1, name: 'event1', description: 'description1', datetime: '2019-03-20 21:00'},
        {id: 2, name: 'event2', description: 'description2', datetime: '2020-04-21 22:00'},
        {id: 3, name: 'event3', description: 'description3', datetime: '2021-05-22 23:00'}
    ],
    errors: {},
};


export default (state = initialState, {type, data}) => {
    switch (type) {
        case ADD_NEW_EVENT:
            return {
                data: [...state.data, data.event],
                errors: state.errors,
            };
        case REMOVE_EVENT:
            let eventIdToDelete = data.id;
            return {
                data: [...state.data.filter(event => event.id !== eventIdToDelete)],
                errors: state.errors
            };
        case EDIT_EVENT:
            let eventIdToEdit = data.event.id;
            return {
                data: [...state.data.filter(event => event.id !== eventIdToEdit), data.event],
                errors: state.errors
            };
        default:
            return state || [];
    }
};