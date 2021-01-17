import App, { AppProps } from "next/app";
import { Route } from "../components/Route";
import { appWithFleurContext, FleurAppContext } from "../lib/fleur";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Route>
      <Component {...pageProps} />
    </Route>
  );
}

MyApp.getInitialProps = async (appContext: FleurAppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default appWithFleurContext(MyApp);
