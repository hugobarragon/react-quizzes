import React, { useState } from "react";
import ReactDOM from "react-dom";
import { QuizzBuilder } from "./App";
import QuizExample from "./QuizExample";
import "./assets/antd.css";

function App() {
  const [formdata, setFormData] = useState([]);

  return (
    <div className="App">
      <QuizExample data={formdata} />
      <QuizzBuilder onChange={setFormData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
