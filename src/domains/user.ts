import { supabase } from "./../util/supabase";
import { action, actions, operations, reducerStore } from "@fleur/fleur";

export const userOps = operations({
  setUser(context) {
    const { id, email } = supabase.auth.user();
    context.dispatch(userAct.setUser, { id, email });
  },
  async signup(context, email: string, password: string) {
    const { user } = await supabase.auth.signUp({ email, password });
    await supabase.from("users").insert([{ id: user.id, email: user.email }]);
    context.dispatch(userAct.signin, { id: user.id, email: user.email });
  },
  async signin(context, email: string, password: string) {
    const { user } = await supabase.auth.signIn({ email, password });
    context.dispatch(userAct.signin, { id: user.id, email: user.email });
  },
  async signout(context) {
    await supabase.auth.signOut();
    context.dispatch(userAct.signout, {});
  },
});

export const userAct = actions("user", {
  setUser: action<IState>(),
  signup: action<IState>(),
  signin: action<IState>(),
  signout: action(),
});

type IState = {
  id: string;
  email: string;
};

export const userStore = reducerStore<IState>("user", () => ({
  id: null,
  email: "",
}));
