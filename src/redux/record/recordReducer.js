import { ADD_RECORD, DELETE_RECORD } from "./recordTypes";
import initData from "./initData";

const initState = initData;

const recordReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_RECORD:
      return [...state, action.payload];
    case DELETE_RECORD:
      return state.filter((record) => record.id !== action.payload);
    default:
      return state;
  }
};

export default recordReducer;
