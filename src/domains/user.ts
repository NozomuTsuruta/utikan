import { supabase } from "./../util/supabase";
import actionCreatorFactory from "typescript-fsa";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Dispatch } from "redux";

const action = actionCreatorFactory();

const userAct = {
  setUser: action<IUser>("SET_USER"),
  signup: action<IUser>("SIGN_UP"),
  signin: action<IUser>("SIGN_IN"),
  signout: action("SIGN_OUT"),
};

export type IUser = {
  id: string;
  email: string;
};

const init: IUser = { id: null, email: "" };

export const userReducer = reducerWithInitialState(init)
  .cases(
    [userAct.setUser, userAct.signin, userAct.signup],
    (state, payload) => ({
      ...state,
      ...payload,
    })
  )
  .case(userAct.signout, () => ({
    ...init,
  }));

export const userOps = {
  setUser: (dispatch: Dispatch) => {
    const { id, email } = supabase.auth.user();
    dispatch(userAct.setUser({ id, email }));
  },
  signup: (email: string, password: string) => async (dispatch: Dispatch) => {
    const { user } = await supabase.auth.signUp({ email, password });
    await supabase.from("users").insert([{ id: user.id, email: user.email }]);
    dispatch(userAct.signin({ id: user.id, email: user.email }));
  },
  signin: (email: string, password: string) => async (dispatch: Dispatch) => {
    const { user } = await supabase.auth.signIn({ email, password });
    dispatch(userAct.signin({ id: user.id, email: user.email }));
  },
  signout: async (dispatch: Dispatch) => {
    await supabase.auth.signOut();
    dispatch(userAct.signout);
  },
};
