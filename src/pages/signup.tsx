import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { supabase } from "../util/supabase";

type IForm = {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const submit = async ({ email, password }: IForm) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" name="name" ref={register} />
      <input type="email" name="email" ref={register} />
      <input type="password" name="password" ref={register} />
      <input type="password" name="passwordConf" ref={register} />
      <button type="submit">サインアップ</button>
    </form>
  );
};

export default Signup;
