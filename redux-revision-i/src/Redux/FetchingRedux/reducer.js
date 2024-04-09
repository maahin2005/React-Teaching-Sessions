import { DATA } from "./actionTypes";

export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case DATA:
      return payload;
    default:
      return state;
  }
};
