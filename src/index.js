import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ErrorBoundary } from "./containers/ErrorBoundary/ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);
