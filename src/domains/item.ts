import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";

const action = actionCreatorFactory();

export const itemAct = {};

export type IItem = {
  id: number;
  name: string;
  isExp: boolean;
  limit: string;
  num: number;
};

const init: IItem[] = [];

export const itemReducer = reducerWithInitialState(init);
