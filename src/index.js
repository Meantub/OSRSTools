import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import store from "./store";
import App from "./components/App";

const Index = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

// NOTE: If changed to ReactDOM.hydrate() it will cause it to give non matching div error
ReactDOM.render(<Index />, document.getElementById("index"));
