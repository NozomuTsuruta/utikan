import { useFleurContext } from "@fleur/react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
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

  const inputList = [
    { type: "email", name: "email", ref: register },
    { type: "password", name: "password", ref: register },
  ];

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleSignin)}
        inputList={inputList}
        buttonText="サインアップ"
      />
    </div>
  );
};

export default Signin;
