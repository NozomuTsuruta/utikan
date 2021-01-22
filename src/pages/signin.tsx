import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Form } from "../components/Form";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  useQuery()

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
