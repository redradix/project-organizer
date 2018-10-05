import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

sagaMiddleware.run();

export default store;
