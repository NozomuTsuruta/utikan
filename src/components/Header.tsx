import { useQueryClient } from "react-query";
import { userAction } from "../util/user";

export const Header = () => {
  const quelyClient = useQueryClient();
  const handleSignout = async () => {
    quelyClient.setQueryData("user", userAction.signout);
  };

  return (
    <div className="flex">
      <h1>冷蔵庫マネージャー</h1>
      <button onClick={handleSignout}>サインアウト</button>
    </div>
  );
};
