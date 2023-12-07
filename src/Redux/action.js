import axios from "axios";
import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./action.type";

export const GetPRODUCTApi = () => (dispatch) => {
  const options = {
    method: "GET",
    url: "https://wayfair.p.rapidapi.com/products/search",
    params: {
      keyword: "light shaded room",
      sortby: "0",
      curpage: 1,
      itemsperpage: "20",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RapidAPIKey,
      "X-RapidAPI-Host": process.env.REACT_APP_RapidAPIHost,
    },
  };
  dispatch({ type: GET_PRODUCT_LOADING });
  axios
    .request(options)
    .then((r) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data?.response?.product_collection });
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCT_ERROR });
    });
};
