import "@styles/main.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import store from "../src/redux/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Provider>
  );
}

export default App;
