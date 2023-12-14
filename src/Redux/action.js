// actions.js
import axios from "axios";
import { SET_BEST_ITEMS, SET_BEST_SELLING, SET_LOADING } from "./actionType";


export const setBestSelling = (data) => ({
  type: SET_BEST_SELLING,
  payload: data,
});

export const setBestItems = (data) => ({
  type: SET_BEST_ITEMS,
  payload: data,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const fetchBestSelling = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        "https://wayfair.p.rapidapi.com/categories/list?caid=214970",
        {
          headers: {
            "X-RapidAPI-Key": "d9ad70c688msh5271c1a897e7890p1adbedjsn73981b63a0e5",
            "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
          },
        }
      );

      const data = response.data.response.categoryAppData.departmentCategories;

      dispatch(setBestSelling(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const fetchBestItems = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(
        "https://wayfair.p.rapidapi.com/products/list?categoryId=45974&itemsPerPage=48&page=1",
        {
          headers: {
            "X-RapidAPI-Key": "d9ad70c688msh5271c1a897e7890p1adbedjsn73981b63a0e5",
            "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
          },
        }
      );

      const data = response.data.response.data.category.browse.products;

      dispatch(setBestItems(data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
