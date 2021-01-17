import Fleur from "@fleur/fleur";
import { itemStore } from "./item";
import { AppStore } from "./App";
import { userStore } from "./user";

const app = new Fleur({
  stores: [AppStore, itemStore, userStore],
});

export const createContext = () => app.createContext();
