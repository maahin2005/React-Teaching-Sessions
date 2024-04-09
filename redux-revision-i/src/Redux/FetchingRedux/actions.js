import { DATA } from "./actionTypes";
import axios from "axios";

export const getTheData = () => async (dispatch) => {
  const API_URL = `https://jsonmock.hackerrank.com/api/football_matches?page=2`;
  try {
    let response = await axios.get(API_URL);

    console.log("API: ", response.data);

    dispatch({ type: DATA, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
