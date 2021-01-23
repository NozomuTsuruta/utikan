import { userAction } from "../util/user";

export const Header = () => {
  const handleSignout = async () => {
    userAction.signout();
  };

  return (
    <div className="flex">
      <h1>冷蔵庫マネージャー</h1>
      <button onClick={handleSignout}>サインアウト</button>
    </div>
  );
};
