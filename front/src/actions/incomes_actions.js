export const ADD_NEW_INCOME = "ADD_NEW_INCOME";
export const addIncome = (income) => ({
    type: ADD_NEW_INCOME,
    data: {
        income,
    }
});

export const REMOVE_INCOME = "REMOVE_INCOME";
export const removeIncome = (id) => ({
    type: REMOVE_INCOME,
    data: {
        id,
    }
});

export const EDIT_INCOME = "EDIT_INCOME";
export const editIncome = (income) => ({
    type: EDIT_INCOME,
    data: {
        income,
    }
});

export const REQUEST_API_DATA_INCOMES = "REQUEST_API_DATA_INCOMES";
export const requestApiDataIncomes = () => ({
    type: REQUEST_API_DATA_INCOMES
});

export const RECEIVE_API_DATA_INCOMES = "RECEIVE_API_DATA_INCOMES";
export const receiveApiDataIncomes = (data) => ({
    type: RECEIVE_API_DATA_INCOMES,
    data
});