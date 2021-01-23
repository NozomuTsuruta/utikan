import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/tailwind.css";
import { supabase } from "../util/supabase";
import { Header } from "../components/Header";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  supabase.auth.onAuthStateChange((event, session) => {
    queryClient.setQueryData("user", session?.user);
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Header />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
