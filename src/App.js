import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Photos from "./Photos";
import Manu from "./Manu";
import About from "./About";
import Contact from "./ContactUs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <a className="logo" href="https://stannaslaviji.rs">
          {" "}
          <img className="logoImg" src="./images/SlavijaSquareApartment.jpg.jpg" width="120" height="120" />
          Soul Apartment - Slavija Square
        </a>
      </header>
      <div>
        <Manu />
      </div>
      <div className="slider">
        <Photos />
      </div>
      <div>
        <About />
      </div>

      <div>
        <Contact />
      </div>
      <span className="footer">Soul Apartment © 2020</span>
    </div>
  );
}

export default App;
