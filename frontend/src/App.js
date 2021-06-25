import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputBox from "./components/InputBox";
import TextList from "./components/TextList";
import axios from "axios";

function App() {
  const [List, setList] = useState([]);

  useEffect(() => {
    axios.get("/api/values").then(response => {
      setList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TextList textList={List} />
        <InputBox />
      </header>
    </div>
  );
}

export default App;
