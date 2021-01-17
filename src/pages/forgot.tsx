import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
};

const Forgot: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const handleResetPassword = async ({ email }: IForm) => {
    await supabase.auth.api.resetPasswordForEmail(email);
  };

  return (
    <form onSubmit={handleSubmit(handleResetPassword)}>
      <input type="email" name="email" ref={register} />
      <button type="submit">パスワード再設定メール</button>
    </form>
  );
};

export default Forgot;
