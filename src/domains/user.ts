import { actions, operations, reducerStore } from "@fleur/fleur";

export const userOps = operations({});

export const userAct = actions("user", {});

type IState = {
  id: number;
  name: string;
};

export const userStore = reducerStore<IState>("user", () => ({
  id: null,
  name: "",
}));
