import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const submit = async ({ email, password }: IForm) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="email" name="email" ref={register} />
      <input type="password" name="password" ref={register} />
      <button type="submit">サインイン</button>
    </form>
  );
};

export default Signin;
