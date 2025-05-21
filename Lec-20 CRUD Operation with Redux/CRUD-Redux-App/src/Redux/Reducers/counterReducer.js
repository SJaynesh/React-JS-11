import { DEC, INC } from "../Actions/actionTypes";

const count = 0;

const couterReducer = (state = count, action) => {
  if (action.type == INC) {
    return state + 1;
  } else if (action.type == DEC) {
    return state - 1;
  } else {
    return state;
  }
};

export default couterReducer;
