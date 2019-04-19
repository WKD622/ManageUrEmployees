export const REQUEST_ADD_NEW_OUTCOME = "REQUEST_ADD_NEW_OUTCOME";
export const requestAddOutcome = () => ({
    type: REQUEST_ADD_NEW_OUTCOME,
});

export const RECEIVE_ADD_NEW_OUTCOME = "RECEIVE_ADD_NEW_OUTCOME";
export const receiveAddOutcome = (outcome) => ({
    type: RECEIVE_ADD_NEW_OUTCOME,
    data: {
        outcome: outcome,
    }
});

export const REQUEST_REMOVE_OUTCOME = "REQUEST_REMOVE_OUTCOME";
export const requestRemoveOutcome = () => ({
    type: REQUEST_REMOVE_OUTCOME,
});

export const RECEIVE_REMOVE_OUTCOME = "RECEIVE_REMOVE_OUTCOME";
export const receiveRemoveOutcome = (id) => ({
    type: RECEIVE_REMOVE_OUTCOME,
    data: {
        id: id,
    }
});

export const REQUEST_EDIT_OUTCOME = "REQUEST_EDIT_OUTCOME";
export const requestEditOutcome = () => ({
    type: REQUEST_EDIT_OUTCOME,
});

export const RECEIVE_EDIT_OUTCOME = "RECEIVE_EDIT_OUTCOME";
export const receiveEditOutcome = (outcome) => ({
    type: RECEIVE_EDIT_OUTCOME,
    data: {
        outcome: outcome,
    }
});

export const REQUEST_API_DATA_OUTCOME = "REQUEST_API_DATA_OUTCOME";
export const requestApiDataOutcome = () => ({
    type: REQUEST_API_DATA_OUTCOME,
});

export const RECEIVE_API_DATA_OUTCOME = "RECEIVE_API_DATA_OUTCOME";
export const receiveApiDataOutcome = (outcomes) => ({
    type: RECEIVE_API_DATA_OUTCOME,
    data: {
        outcomes: outcomes,
    }
});
