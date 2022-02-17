import { createStore, combineReducers } from "redux";
import recordReducer from "./record/recordReducer";

const store = createStore(
  combineReducers({
    allRecords: recordReducer,
  })
);

export default store;
