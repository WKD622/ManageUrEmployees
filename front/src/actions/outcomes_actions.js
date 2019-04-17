export const ADD_NEW_OUTCOME = "ADD_NEW_OUTCOME";
export const addOutcome = (outcome) => ({
    type: ADD_NEW_OUTCOME,
    data: {
        outcome,
    }
});

export const REMOVE_OUTCOME = "REMOVE_OUTCOME";
export const removeOutcome = (id) => ({
    type: REMOVE_OUTCOME,
    data: {
        id,
    }
});

export const EDIT_OUTCOME = "EDIT_OUTCOME";
export const editOutcome = (outcome) => ({
    type: EDIT_OUTCOME,
    data: {
        outcome,
    }
});

export const REQUEST_API_DATA_OUTCOMES = "REQUEST_API_DATA_OUTCOMES";
export const requestApiDataOutcomes = () => ({
    type: REQUEST_API_DATA_OUTCOMES
});

export const RECEIVE_API_DATA_OUTCOMES = "RECEIVE_API_DATA_OUTCOMES";
export const receiveApiDataOutcomes = (data) => ({
    type: RECEIVE_API_DATA_OUTCOMES,
    data
});