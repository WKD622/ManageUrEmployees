import {RECEIVE_API_DATA_OUTCOMES} from "../actions/outcomes_actions";

const initialState = {
    data: [
        {name: 'outcome1', sum: 100, date: '2019-03-20'},
        {name: 'outcome2', sum: 200, date: '2020-04-21'},
        {name: 'outcome3', sum: 300, date: '2021-05-22'}
    ],
    errors: {},
};

export default (state = initialState, {type, employees}) => {
    switch (type) {
        case RECEIVE_API_DATA_OUTCOMES:
            return {...state, employees};
        default:
            return state || [];
    }
};
