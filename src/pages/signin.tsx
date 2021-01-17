import { useForm } from "react-hook-form";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
  password: string;
};

export default function signin() {
  const { register, handleSubmit } = useForm<IForm>();

  const submit = ({ email, password }: IForm) => {
    supabase.auth.signIn({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">サインイン</button>
    </form>
  );
}
