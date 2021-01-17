import { actions, operations, reducerStore } from "@fleur/fleur";

export const containerOps = operations({});

export const containerAct = actions("container", {});

type IState = {
  id: number;
  name: string;
};

export const containerStore = reducerStore<IState[]>("container", () => []);
