import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "mobx-react"; // MobX 에서 사용하는 Provider
import App from "./mobx/App";
import CounterStore from "./mobx/store/counter"; // 방금 만든 스토어 불러와줍니다.

import { createStore } from "redux";
import { Provider as Provider2 } from "react-redux";
import App2 from "./redux/App";
import todoApp from "./redux/store/reducers";
const counter = new CounterStore();
let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <div>
    <div>
      mobX
      <Provider counter={counter}>
        <App />
      </Provider>
    </div>
    <div>
      redux
      <Provider2 store={store}>
        <App2 />
      </Provider2>
    </div>
  </div>,
  document.getElementById("root")
);
