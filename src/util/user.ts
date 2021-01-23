import { supabase } from "./supabase";
import { IUser } from "./type";

export const initUser: IUser = { id: "", email: "" };

export const userAction = {
  signup: async (email: string, password: string) => {
    const { user } = await supabase.auth.signUp({ email, password });
    if (user) {
      await supabase
        .from("users")
        .insert([{ uid: user.id, email: user.email }]);
      return { id: user.id, email: user.email };
    }
  },
  signin: async (email: string, password: string) => {
    const { user } = await supabase.auth.signIn({ email, password });
    if (user) {
      return { id: user.id, email: user.email };
    }
  },
  signout: async () => {
    await supabase.auth.signOut();
    return initUser;
  },
};
