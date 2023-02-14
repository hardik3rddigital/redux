import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Import Components
import App from "./App";
import Main from "./Main";

import store from "./State/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <Main />
    </Provider>
  </>,
  document.getElementById("root")
);
