import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { Header } from "../components/Header";
import "../styles/tailwind.css";
import { Spinner } from "../components/Spinner";
import { useAuthRouter } from "../util";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useAuthRouter(queryClient);

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
