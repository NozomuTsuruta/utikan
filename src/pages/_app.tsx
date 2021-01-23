import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { supabase } from "../util/supabase";
import { Header } from "../components/Header";
import { useRouter } from "next/router";
import "../styles/tailwind.css";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { pathname, push } = useRouter();
  const [loading, setLoading] = useState(true);

  supabase.auth.onAuthStateChange((event, session) => {
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
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        )}
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
