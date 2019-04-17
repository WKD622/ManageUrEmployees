import {RECEIVE_API_DATA_INCOMES} from "../actions/incomes_actions";

const initialState = {
    data: [
        {name: 'income1', sum: 100, date: '2019-03-20'},
        {name: 'income2', sum: 200, date: '2020-04-21'},
        {name: 'income3', sum: 300, date: '2021-05-22'}
    ],
    errors: {},
};


export default (state = initialState, {type, employees}) => {
    switch (type) {
        case RECEIVE_API_DATA_INCOMES:
            return {...state, employees};
        default:
            return state || {};
    }
};
