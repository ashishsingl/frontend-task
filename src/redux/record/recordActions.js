import { ADD_RECORD, DELETE_RECORD } from "./recordTypes";

export const addRecord = (data) => {
  return {
    type: ADD_RECORD,
    payload: data,
  };
};

export const deleteRecord = (id) => {
  return {
    type: DELETE_RECORD,
    payload: id,
  };
};
