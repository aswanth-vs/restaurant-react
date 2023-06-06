import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { allrestaurantReducer } from "./reducers/allrestaurantReducer";

//might have more than one reducer. Give it as a key:value pair
const reducers = combineReducers({
  allrestaurantReducer,
});

//to create a middleware using thunk library. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.
const middleware = [thunk];

//might have more than one middleware hence spread operator is used
const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
