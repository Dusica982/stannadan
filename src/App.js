import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import SimpleSlider from "./SimpleSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a className="logo" href="https://stannaslaviji.rs">
          Stan na Slaviji Beograd
        </a>
      </header>
      <div className="slider">
        <SimpleSlider />
      </div>
    </div>
  );
}

export default App;
