import { useFleurContext } from "@fleur/react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { userOps } from "../domains/user";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const { executeOperation } = useFleurContext();

  const handleSignin = async ({ email, password }: IForm) => {
    executeOperation(userOps.signin, email, password);
  };

  return (
    <form onSubmit={handleSubmit(handleSignin)}>
      <input type="email" name="email" ref={register} />
      <input type="password" name="password" ref={register} />
      <button type="submit">サインイン</button>
    </form>
  );
};

export default Signin;
