// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducer"; // Update the path accordingly

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;