import axios from "axios";
import { FETCH_AWARD_SUCCESS } from "../actionType";
const url = "http://localhost:3001/award";

export const fetchAward = (params) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "get",
      url: `${url}/`,
      headers: {
        access_token: localStorage.access_token,
      },
      params,
    });
    dispatch(fetchAwardSuccess(data));
    return data;
  } catch (err) {
    return err;
  }
};

const fetchAwardSuccess = (payload) => {
  return {
    type: FETCH_AWARD_SUCCESS,
    payload,
  };
};
