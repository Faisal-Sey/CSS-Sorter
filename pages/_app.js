import { store, persistor } from "../Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />;
      </PersistGate>
    </Provider>
  )
}

export default MyApp
