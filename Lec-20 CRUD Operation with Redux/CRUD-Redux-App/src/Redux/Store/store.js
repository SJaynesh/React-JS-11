import { createStore } from "redux";
import crudReducer from "../Reducers/crudReducer";

const store = createStore(crudReducer);

export default store;