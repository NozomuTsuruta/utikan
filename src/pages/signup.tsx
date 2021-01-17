import { useFleurContext } from "@fleur/react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { userOps } from "../domains/user";

type IForm = {
  email: string;
  password: string;
  passwordConf: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const { executeOperation } = useFleurContext();

  const handleSignup = ({ email, password }: IForm) => {
    executeOperation(userOps.signup, email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <input type="email" name="email" ref={register} />
      <input type="password" name="password" ref={register} />
      <input type="password" name="passwordConf" ref={register} />
      <button type="submit">サインアップ</button>
    </form>
  );
};

export default Signup;
