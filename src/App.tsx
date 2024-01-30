import React, { useState } from "react";
import "./App.css";

function App() {
  const [rotate, setRotate] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>("");

  const rotateHead = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  };

  const handleGreet = () => {
    if (greeting.toLowerCase().includes("hello kitty")) {
      rotateHead();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div
          className={`hello-kitty ${rotate ? "rotate" : ""}`}
          onClick={rotateHead}
        ></div>
        <input
          type="text"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          placeholder="Say Hello to Kitty"
        />
        <button onClick={handleGreet}>Say Hello</button>
      </header>
    </div>
  );
}

export default App;
