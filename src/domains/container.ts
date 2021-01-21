import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const action = actionCreatorFactory();

export const containerAct = {};

export type IContainer = {
  id: number;
  name: string;
};

const init: IContainer[] = [];

export const containerReducer = reducerWithInitialState(init);
