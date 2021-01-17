import { supabase } from "../util/supabase";

export const Header = () => {
  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    console.error(error);
  };

  return (
    <div>
      <h1>冷蔵庫マネージャー</h1>
      <button onClick={handleSignout}>サインアウト</button>
    </div>
  );
};
