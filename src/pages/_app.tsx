import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { dehydrate, Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/tailwind.css";
import { initUser, userAction } from "../util/user";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("user", userAction.setUser, {
    initialData: initUser,
  });
  console.log(queryClient.getQueryData("user"));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
