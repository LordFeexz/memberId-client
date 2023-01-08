import axios from "axios";
const url = "http://localhost:3001/auth";

export const login = (payload) => async (dispatch) => {
  try {
    if (payload.email === "") throw new Error("invalid email");
    if (payload.password === "") throw new Error("invalid password");

    const { data } = await axios({
      method: "post",
      url: `${url}/login`,
      data: payload,
    });

    return data;
  } catch (err) {
    return err;
  }
};

export const register = (payload) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${url}/register`,
      data: payload,
    });

    return data;
  } catch (err) {
    return err;
  }
};
