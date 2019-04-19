export const REQUEST_ADD_NEW_INCOME = "REQUEST_ADD_NEW_INCOME";
export const requestAddIncome = () => ({
    type: REQUEST_ADD_NEW_INCOME,
});

export const RECEIVE_ADD_NEW_INCOME = "RECEIVE_ADD_NEW_INCOME";
export const receiveAddIncome = (income) => ({
    type: RECEIVE_ADD_NEW_INCOME,
    data: {
        income: income,
    }
});

export const REQUEST_REMOVE_INCOME = "REQUEST_REMOVE_INCOME";
export const requestRemoveIncome = () => ({
    type: REQUEST_REMOVE_INCOME,
});

export const RECEIVE_REMOVE_INCOME = "RECEIVE_REMOVE_INCOME";
export const receiveRemoveIncome = (id) => ({
    type: RECEIVE_REMOVE_INCOME,
    data: {
        id: id,
    }
});

export const REQUEST_EDIT_INCOME = "REQUEST_EDIT_INCOME";
export const requestEditIncome = () => ({
    type: REQUEST_EDIT_INCOME,
});

export const RECEIVE_EDIT_INCOME = "RECEIVE_EDIT_INCOME";
export const receiveEditIncome = (income) => ({
    type: RECEIVE_EDIT_INCOME,
    data: {
        income: income,
    }
});

export const REQUEST_API_DATA_INCOME = "REQUEST_API_DATA_INCOME";
export const requestApiDataIncome = () => ({
    type: REQUEST_API_DATA_INCOME,
});

export const RECEIVE_API_DATA_INCOME = "RECEIVE_API_DATA_INCOME";
export const receiveApiDataIncome = (incomes) => ({
    type: RECEIVE_API_DATA_INCOME,
    data: {
        incomes: incomes,
    }
});