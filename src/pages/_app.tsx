import App, { AppProps } from "next/app";
import { appWithFleurContext, FleurAppContext } from "../lib/fleur";
import "../styles/tailwind.css";
import { createClient } from "@supabase/supabase-js";

function MyApp({ Component, pageProps }: AppProps) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext: FleurAppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithFleurContext(MyApp);
