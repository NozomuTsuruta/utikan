import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const action = actionCreatorFactory();

export const containerActions = {};

export type IContainer = {
  id: number;
  name: string;
};

export const containerReducer = reducerWithInitialState([]);
