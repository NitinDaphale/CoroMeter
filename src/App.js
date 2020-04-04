import React, { Profiler } from "react";
import Home from "./home";
import "./styles.css";

function onProfilerRendered() {}

export default function App() {
  return (
    <div className="App">
      <Profiler id="Navigation" onRender={onProfilerRendered}>
        <Home />
      </Profiler>
    </div>
  );
}
