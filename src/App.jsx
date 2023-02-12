import reactLogo from "./assets/react.svg";
import "./App.css";
import InputShort from "./components/InputShort";
import Background from "./components/Background";
import LinkShort from "./components/LinkShort";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <InputShort setInputValue={setInputValue} />
      <Background />
      <LinkShort inputValue={inputValue} />
    </div>
  );
}

export default App;
