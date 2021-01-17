import { FC } from "react";
import { IInput } from "../util/type";

type IProps = {
  onSubmit: any;
  buttonText: string;
  inputList: IInput[];
};

export const Form: FC<IProps> = ({ onSubmit, buttonText, inputList }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-center px-4">
      {inputList.map((props) => (
        <label key={props.name} className="w-auto">
          <span className="block">{props.name}</span>
          <input {...props} className="input" />
        </label>
      ))}
      <button className="button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};
