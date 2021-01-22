import { supabase } from "./supabase";
import { IUser } from "./type";

export const initUser: IUser = { id: "", email: "" };

export const userAction = {
  setUser: (): IUser => {
    const { id, email } = supabase.auth.user();
    return { id, email };
  },
  signup: async (email: string, password: string): Promise<IUser> => {
    const { user } = await supabase.auth.signUp({ email, password });
    await supabase.from("users").insert([{ id: user.id, email: user.email }]);
    return { id: user.id, email: user.email };
  },
  signin: async (email: string, password: string): Promise<IUser> => {
    const { user } = await supabase.auth.signIn({ email, password });
    return { id: user.id, email: user.email };
  },
  signout: async (): Promise<IUser> => {
    await supabase.auth.signOut();
    return initUser;
  },
};
