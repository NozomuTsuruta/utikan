import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient } from "react-query";
import { supabase } from "./supabase";

/**
 * ログイン状態を監視,react-queryに保存し、リダイレクト処理を行う
 *
 * @param {QueryClient} queryClient react-queryの初期化関数
 * @return {boolean} loading
 */
export const useAuthRouter = (queryClient: QueryClient) => {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);

  supabase.auth.onAuthStateChange((_, session) => {
    queryClient.setQueryData("user", session?.user);
    if (session?.user && (pathname === "/signin" || pathname === "/signup")) {
      push("/");
    } else if (!session?.user && pathname !== "/signup") {
      push("/signin");
    }
  });

  useEffect(() => {
    (async () => {
      const user = supabase.auth.user();
      if (user && (pathname === "/signin" || pathname === "/signup")) {
        await push("/");
      } else if (!user && pathname !== "/signup") {
        await push("/signin");
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading };
};
