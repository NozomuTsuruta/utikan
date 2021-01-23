import { User } from "@supabase/supabase-js";

export const authRedirectRoot = (
  user: User | null | undefined,
  pathname: string,
  push: (url: string) => Promise<boolean>
) => {
  if (user && (pathname === "/signin" || pathname === "/signup")) {
    push("/");
  } else if (!user && pathname !== "/signup") {
    push("/signin");
  }
};
