import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("action : ", action);
  return next(action);
};

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...[thunk, loggerMiddleware]))
);

export default store;
