const Reducer = (state = 0, action) => {
  if (action.type === "Deposite") {
    return state + action.payload;
  } else if (action.type === "Withdraw") {
    return state - action.payload;
  } else if (action.type === "Reset") {
    return 0;
  } else {
    return state;
  }
};

export default Reducer;
