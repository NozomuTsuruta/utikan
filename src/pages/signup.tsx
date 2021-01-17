import { useFleurContext } from "@fleur/react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
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

  const inputList = [
    { type: "email", name: "email", ref: register },
    { type: "password", name: "password", ref: register },
    { type: "password", name: "passwordConf", ref: register },
  ];

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleSignup)}
        inputList={inputList}
        buttonText="サインアップ"
      />
    </div>
  );
};

export default Signup;
