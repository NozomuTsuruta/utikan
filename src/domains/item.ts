import { actions, operations, reducerStore } from "@fleur/fleur";

export const itemOps = operations({});

export const itemAct = actions("item", {});

type IState = {
  id: number;
  name: string;
  isBest: boolean;
  limit: string;
};

export const itemStore = reducerStore<IState[]>("item", () => []);
