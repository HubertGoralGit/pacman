import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} />
    </div>
  );
}

export default App;
