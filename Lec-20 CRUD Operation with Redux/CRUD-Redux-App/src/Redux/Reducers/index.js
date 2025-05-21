import { combineReducers } from "redux";
import crudReducer from "./crudReducer";
import couterReducer from "./counterReducer";

const initReducer = combineReducers({
  crud: crudReducer,
  coute: couterReducer,
});

export default initReducer;
