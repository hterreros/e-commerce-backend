import axios from "axios";

const URL_ROOT = "https://demo-api-2.onrender.com/api/auth";

const CONFIG = {
  headers: {
    "auth-token": localStorage.getItem("token"),
  },
};

export const loginSerivce = async (form) => {
  const resp = await axios.post(`${URL_ROOT}/login`, form);

  return resp.data;
};

export const signupSerivce = async (form) => {
  const resp = await axios.post(`${URL_ROOT}`, form);

  return resp.data;
};

export const verifyingTokenSerivce = async () => {
  const resp = await axios.get(`${URL_ROOT}`, CONFIG);

  return resp.data;
};
