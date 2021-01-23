import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { Form } from "../components/Form";
import { userAction } from "../util/user";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const queryClient = useQueryClient();
  const handleSignin = ({ email, password }: IForm) => {
    queryClient.fetchQuery("user", () => userAction.signin(email, password));
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
