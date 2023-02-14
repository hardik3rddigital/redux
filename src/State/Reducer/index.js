import { combineReducers } from "redux";
import Amountreducer from "./Amountreducer";

const reducerslist = combineReducers({
    bankBalance : Amountreducer
})

export default reducerslist;