import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
};

const Forgot: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const submit = async ({ email }: IForm) => {
    const { data, error } = await supabase.auth.api.resetPasswordForEmail(
      email
    );
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="email" name="email" ref={register} />
      <button type="submit">パスワード再設定メール</button>
    </form>
  );
};

export default Forgot;
