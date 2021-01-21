import { IUser, userReducer } from "./user";
import { IItem, itemReducer } from "./item";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { containerReducer, IContainer } from "./container";

export type RootState = {
  container: IContainer[];
  item: IItem[];
  user: IUser;
};

export const store = createStore(
  combineReducers<RootState>({
    container: containerReducer,
    item: itemReducer,
    user: userReducer,
  }),
  // redux-dev-toolsを使えるように
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
