import React, { Profiler } from "react";
import Home from "./home";
import "./styles.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

function onProfilerRendered() {}

const reduxStore = createStore(rootReducer);

export default function App() {
  return (
    <div className="App">
      <Profiler id="Navigation" onRender={onProfilerRendered}>
        <Provider store={reduxStore}>
          <Home />
        </Provider>
      </Profiler>
    </div>
  );
}
