import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreaters} from './State/index';

import { useSelector } from "react-redux";

const Main = (props)=> {
    const calc = useDispatch();
    const actioneasy = bindActionCreators(actionCreaters, calc);
    
    const bbbox = useSelector(state => state.bankBalance)


    return(
        <>
            <div className="Main mt-3 ">
                <div className="container shadow-sm py-3 border">
                    <h4>This is a Main components</h4>
                    <p>Balance Box : {bbbox} </p>
                    {/* <button className="addcart btn btn-primary mx-3" onClick={()=> calc(actionCreaters.WithdrawBalance(100))}>
                        withdraw
                    </button>
                    <button className="addcart btn btn-primary mx-3" onClick={()=> calc(actionCreaters.Depositemoney(100))}>
                        Deposite
                    </button>

                    <button className="addcart btn btn-primary mx-3" onClick={()=> calc(actionCreaters.ResetBalance(0))}>
                        Reset Balance
                    </button> */}
                    {/* Using  bindActionCreators */}
                    <button className="addcart btn btn-primary mx-3" onClick={()=> {actioneasy.WithdrawBalance(100)}}>
                        withdraw
                    </button>
                    <button className="addcart btn btn-primary mx-3" onClick={()=> {actioneasy.Depositemoney(50)}}>
                        Deposite
                    </button>

                    <button className="addcart btn btn-primary mx-3" onClick={()=> {actioneasy.ResetBalance(0)}}>
                        Reset Balance
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main;