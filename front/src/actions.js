export const REQUEST_API_DATA_EMPLOYEES = "REQUEST_API_DATA_EMPLOYEES";
export const RECEIVE_API_DATA_EMPLOYEES = "RECEIVE_API_DATA_EMPLOYEES";
export const RECEIVE_API_DATA_EVENTS = "RECEIVE_API_DATA_EVENTS";
export const REQUEST_API_DATA_EVENTS = "REQUEST_API_DATA_EVENTS";
export const RECEIVE_API_DATA_INCOMES = "RECEIVE_API_DATA_INCOMES";
export const REQUEST_API_DATA_INCOMES = "REQUEST_API_DATA_INCOMES";
export const RECEIVE_API_DATA_OUTCOMES = "RECEIVE_API_DATA_OUTCOMES";
export const REQUEST_API_DATA_OUTCOMES = "REQUEST_API_DATA_OUTCOMES";

export const ADD_NEW_EMPLOYEE = "ADD_NEW_EMPLOYEE";
export const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";

export const ADD_NEW_EVENT = "ADD_NEW_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";

export const ADD_NEW_INCOME = "ADD_NEW_INCOME";
export const REMOVE_INCOME = "REMOVE_INCOME";
export const EDIT_INCOME = "EDIT_INCOME";

export const ADD_NEW_OUTCOME = "ADD_NEW_OUTCOME";
export const REMOVE_OUTCOME = "REMOVE_OUTCOME";
export const EDIT_OUTCOME = "EDIT_OUTCOME";


export const addEmployee = (employee) => ({
    type: ADD_NEW_EMPLOYEE,
    data: {
        employee,
    }
});

export const removeEmployee = (pesel) => ({
    type: REMOVE_EMPLOYEE,
    data: {
        pesel,
    }
});

export const editEmployee = (employee) => ({
    type: EDIT_EMPLOYEE,
    data: {
        employee,
    }
});

export const addEvent = (event) => ({
    type: ADD_NEW_EVENT,
    data: {
        event,
    }
});

export const removeEvent = (id) => ({
    type: REMOVE_EVENT,
    data: {
        id,
    }
});

export const editEvent = (event) => ({
    type: EDIT_EVENT,
    data: {
        event,
    }
});

export const addIncome = (income) => ({
    type: ADD_NEW_INCOME,
    data: {
        income,
    }
});

export const removeIncome = (id) => ({
    type: REMOVE_INCOME,
    data: {
        id,
    }
});

export const editIncome = (income) => ({
    type: EDIT_INCOME,
    data: {
        income,
    }
});


export const addOutcome = (outcome) => ({
    type: ADD_NEW_OUTCOME,
    data: {
        outcome,
    }
});

export const removeOutcome = (id) => ({
    type: REMOVE_OUTCOME,
    data: {
        id,
    }
});

export const editOutcome = (outcome) => ({
    type: EDIT_OUTCOME,
    data: {
        outcome,
    }
});

export const requestApiDataEmployees = () => ({type: REQUEST_API_DATA_EMPLOYEES});
export const receiveApiDataEmployees = (data) => ({type: RECEIVE_API_DATA_EMPLOYEES, data});

export const requestApiDataEvents = () => ({type: REQUEST_API_DATA_EVENTS});
export const receiveApiDataEvents = (data) => ({type: RECEIVE_API_DATA_EVENTS, data});

export const requestApiDataIncomes = () => ({type: REQUEST_API_DATA_INCOMES});
export const receiveApiDataIncomes = (data) => ({type: RECEIVE_API_DATA_INCOMES, data});

export const requestApiDataOutcomes = () => ({type: REQUEST_API_DATA_OUTCOMES});
export const receiveApiDataOutcomes = (data) => ({type: RECEIVE_API_DATA_OUTCOMES, data});