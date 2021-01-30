import React from "react";
import "./css/App.css";
import GameTitle from "./components/GameTitle";
import GameAggregator from "./components/GameAggregator";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <GameTitle />
      <GameAggregator />
    </div>
  );
}

export default App;
