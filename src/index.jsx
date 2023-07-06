import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import stylisRTLPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CacheProvider value={cacheRtl}>
      <App />
    </CacheProvider>
  </Provider>
);
