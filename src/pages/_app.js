import Head from "next/head";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../store/index";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <CartProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>MONET U.K</title>
          <meta name="description" content="AUTUMN/WINTER 2024" />
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </CartProvider>
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
