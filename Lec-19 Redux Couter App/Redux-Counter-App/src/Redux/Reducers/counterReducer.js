import { DECREMENT, INCREMENT, RESET } from "../Actions/actionType";

const count = 0;

const counterReducer = (state = count, action) => {

    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            if (state > 1) {
                return state - 1;
            } else {
                return state;
            }
        case RESET:
            return 0;
        default:
            return state;
    }
    // if (action.type == "INCREMENT") {
    //     return state + 1;
    // } else if (action.type == "DECREMENT") {
    //     return state - 1;
    // } else {
    //     return state;
    // }
}

export default counterReducer;