import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";
import { Form } from "../components/Form";
import { userAction } from "../util/user";

type IForm = {
  email: string;
  password: string;
  passwordConf: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const queryClient = useQueryClient();
  const handleSignup = ({ email, password }: IForm) => {
    queryClient.fetchQuery("user", () => userAction.signup(email, password));
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
