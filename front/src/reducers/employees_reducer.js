import {ADD_NEW_EMPLOYEE, REMOVE_EMPLOYEE, EDIT_EMPLOYEE} from "../actions";

const initialState = {
    data: [
        {first_name: 'name1', last_name: 'surname1', pesel: 10000000000, position: 'position1', salary: 1000},
        {first_name: 'name2', last_name: 'surname2', pesel: 20000000000, position: 'position2', salary: 2000},
        {first_name: 'name3', last_name: 'surname3', pesel: 30000000000, position: 'position3', salary: 3000}
    ],
    errors: {},
};


export default (state = initialState, {type, data}) => {
    switch (type) {
        case ADD_NEW_EMPLOYEE:
            return {
                data: [...state.data, data.employee],
                errors: state.errors,
            };
        case REMOVE_EMPLOYEE:
            let employeePeselToDelete = data.pesel;
            return {
                data: [...state.data.filter(employee => employee.pesel !== employeePeselToDelete)],
                errors: state.errors
            };
        case EDIT_EMPLOYEE:
            console.log(data.employee);
            let first_name = data.employee.first_name.value;
            let last_name = data.employee.last_name.value;
            let pesel = data.employee.pesel.value;
            let position = data.employee.position.value;
            let salary = data.employee.position.value;

            const edited_employee = {
                first_name: first_name,
                last_name: last_name,
                pesel: pesel,
                position: position,
                salary: salary,
            };
            console.log(edited_employee);
            return {
                data: [...state.data.filter(employee => employee.pesel !== pesel)],
                errors: state.errors
            };
        default:
            return state || [];
    }
};
