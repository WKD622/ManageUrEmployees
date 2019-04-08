import {RECEIVE_API_DATA} from "../actions";

export default (state = {}, {type, employees}) => {
    console.log("reducer");
    switch (type) {
        case RECEIVE_API_DATA:
            console.log("  receive api data");
            return employees;
        default:
            console.log("  default");
            return state;
    }
};
