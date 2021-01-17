import { NextPage } from "next";
import { supabase } from "../util/supabase";

const Index: NextPage = () => {
  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    console.error(error);
  };

  return (
    <div>
      <button onClick={handleSignout}>サインアウト</button>
    </div>
  );
};

export default Index;
