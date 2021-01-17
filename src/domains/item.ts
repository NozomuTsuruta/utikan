import { actions, operations, reducerStore } from "@fleur/fleur";

export const itemOps = operations({});

export const itemAct = actions("item", {});

type IState = {
  id: number;
  name: string;
  isExp: boolean;
  limit: string;
  num: number;
};

export const itemStore = reducerStore<IState[]>("item", () => []);
