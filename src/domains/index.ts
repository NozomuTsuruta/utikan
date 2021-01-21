import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { containerReducer, IContainer } from "./container";

export type RootState = {
  container: IContainer[];
};

export const store = createStore(
  combineReducers<RootState>({
    container: containerReducer,
  }),
  // redux-dev-toolsを使えるように
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
