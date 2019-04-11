import {combineReducers} from "redux";
import employees from "./employees_reducer"
import incomes from "./incomes_reducer"
import outcomes from "./outcomes_reducer"
import events from "./events_reducer"

export default combineReducers({
    employees,
    incomes,
    outcomes,
    events,
});