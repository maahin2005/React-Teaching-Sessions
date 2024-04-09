import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./FetchingRedux/reducer";
import { thunk } from "redux-thunk";

//   const [data, dispatch] = useReducer(reducer, {});

export const store = legacy_createStore(reducer, applyMiddleware(thunk));
