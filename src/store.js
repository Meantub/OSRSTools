import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  user: {
    isLoading: false,
    username: "",
    skillData: null
  }
};

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
