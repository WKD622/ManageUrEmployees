import {
    REQUEST_ADD_NEW_EMPLOYEE,
    REQUEST_REMOVE_EMPLOYEE,
    REQUEST_EDIT_EMPLOYEE,
    RECEIVE_API_DATA_EMPLOYEES,
    REQUEST_API_DATA_EMPLOYEES,
    RECEIVE_EDIT_EMPLOYEE,
    RECEIVE_ADD_NEW_EMPLOYEE,
    RECEIVE_REMOVE_EMPLOYEE,
} from "../actions/employees_actions";

const initialState = {
    isFetching: false,
    didInvalidate: false,
    data: [],
    errors: {},
};


export default (state = initialState, {type, data}) => {
    switch (type) {
        case REQUEST_ADD_NEW_EMPLOYEE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });

        case RECEIVE_ADD_NEW_EMPLOYEE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                data: [...state.data]
            });

        case REQUEST_REMOVE_EMPLOYEE:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            });

        case RECEIVE_REMOVE_EMPLOYEE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...state.data.filter(employee => employee.pesel !== data.pesel)]
            });

        case REQUEST_EDIT_EMPLOYEE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...state.data]
            });

        case RECEIVE_EDIT_EMPLOYEE:
            let first_name = data.employee.first_name;
            let last_name = data.employee.last_name;
            let pesel = data.employee.pesel;
            let position = data.employee.position;
            let salary = data.employee.salary;

            const edited_employee = {
                first_name: first_name,
                last_name: last_name,
                pesel: pesel,
                position: position,
                salary: salary,
            };

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...state.data.filter(employee => employee.pesel !== pesel), edited_employee]
            });

        case RECEIVE_API_DATA_EMPLOYEES:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: [...data.employees]
            });
        case REQUEST_API_DATA_EMPLOYEES:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        default:
            return state || [];
    }
};
