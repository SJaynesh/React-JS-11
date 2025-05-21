import { createStore } from "redux";
import initReducer from "../Reducers";

const store = createStore(initReducer);

export default store;
