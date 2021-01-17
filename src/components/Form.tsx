import { FC } from "react";
import { IInput } from "../util/type";

type IProps = {
  onSubmit: any;
  buttonText: string;
  inputList: IInput[];
};

export const Form: FC<IProps> = ({ onSubmit, buttonText, inputList }) => {
  return (
    <form onSubmit={onSubmit}>
      {inputList.map((props) => (
        <input key={props.name} {...props} />
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};
