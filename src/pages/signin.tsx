import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { userAction } from "../util/user";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const handleSignin = ({ email, password }: IForm) => {
    userAction.signin(email, password);
  };
  console.log(supabase.auth.user());

  const inputList = [
    { type: "email", name: "email", ref: register },
    { type: "password", name: "password", ref: register },
  ];

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleSignin)}
        inputList={inputList}
        buttonText="サインイン"
      />
    </div>
  );
};

export default Signin;
