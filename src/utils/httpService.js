/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
// import logger from "./logService";
import { toast } from "react-toastify";

const publicFetch = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // logger.log(error);
    toast("Unexepected error occured");
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  publicFetch,
  setJwt,
};
