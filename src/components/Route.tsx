import { useStore } from "@fleur/react";
import Router from "next/router";
import { FC } from "react";
import { userStore } from "../domains/user";

export const Route: FC = ({ children }) => {
  const user = useStore((getStore) => getStore(userStore).state);
  if (!user.id) {
    if (typeof window !== "undefined") {
      Router.push("/signin");
    }
  }
  return <>{children}</>;
};
