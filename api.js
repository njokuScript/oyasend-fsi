import * as Constants from "./constants";
import axios from "axios";

export const register = async data => {
  try {
    let res = await axios.post(Constants.REGISTER, data);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    return handler(err);
  }
};

export const login = async data => {
  try {
    let res = await axios.post(Constants.LOGIN, data);
    return res.data;
  } catch (err) {
    return handler(err);
  }
};

export const handler = err => {
  let error = err;

  if (err.response && err.response.data.hasOwnProperty("message"))
    error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return new Error(error.message);
};
