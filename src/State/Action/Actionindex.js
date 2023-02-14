export const Depositemoney = (bankBalance) => {
    return (dispatch) =>{
        dispatch({
            type:'Deposite',
            payload:bankBalance
        })
    }
}

export const WithdrawBalance = (bankBalance) => {
    return (dispatch) =>{
        dispatch({
            type:'Withdraw',
            payload:bankBalance
        })
    }
}

export const ResetBalance = (bankBalance) => {
    return (dispatch) =>{
        dispatch({
            type:'Reset',
            payload:bankBalance
        })
    }
}

