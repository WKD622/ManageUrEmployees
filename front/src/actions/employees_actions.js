export const REQUEST_ADD_NEW_EMPLOYEE = "REQUEST_ADD_NEW_EMPLOYEE";
export const requestAddEmployee = () => ({
    type: REQUEST_ADD_NEW_EMPLOYEE,
});

export const RECEIVE_ADD_NEW_EMPLOYEE = "RECEIVE_ADD_NEW_EMPLOYEE";
export const receiveAddEmployee = (employee) => ({
    type: RECEIVE_ADD_NEW_EMPLOYEE,
    data: {
        employee,
    }
});

export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const removeEmployee = (pesel) => ({
    type: REMOVE_EMPLOYEE,
    data: {
        pesel,
    }
});

export const REQUEST_EDIT_EMPLOYEE = "REQUEST_EDIT_EMPLOYEE";
export const requestEditEmployee = () => ({
    type: REQUEST_EDIT_EMPLOYEE,
});

export const RECEIVE_EDIT_EMPLOYEE = "RECEIVE_EDIT_EMPLOYEE";
export const receiveEditEmployee = (employee) => ({
    type: RECEIVE_EDIT_EMPLOYEE,
    data: {
        employee,
    }
});

export const REQUEST_API_DATA_EMPLOYEES = "REQUEST_API_DATA_EMPLOYEES";
export const requestApiDataEmployees = () => ({
    type: REQUEST_API_DATA_EMPLOYEES,
});

export const RECEIVE_API_DATA_EMPLOYEES = "RECEIVE_API_DATA_EMPLOYEES";
export const receiveApiDataEmployees = (employees) => ({
    type: RECEIVE_API_DATA_EMPLOYEES,
    data: {
        employees,
    }
});

