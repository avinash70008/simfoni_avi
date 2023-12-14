
import { combineReducers } from "redux";
import { SET_BEST_ITEMS, SET_BEST_SELLING, SET_LOADING } from "./actionType";


const bestSellingReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BEST_SELLING:
      return action.payload;
    default:
      return state;
  }
};

const bestItemsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_BEST_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  bestSelling: bestSellingReducer,
  bestItems: bestItemsReducer,
  loading: loadingReducer,
});

export default rootReducer;
