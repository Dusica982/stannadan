import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Photos from "./Photos";
import Manu from "./Manu";
import About from "./About";
import Contact from "./ContactUs";
// import SocialMedia from "./SocialMedia";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <a className="logo" href="https://stannaslaviji.rs">
            {" "}
            <img className="logoImg" src="./images/SlavijaSquareApartment.jpg.jpg" />
            Soul Apartment - Slavija Square
          </a>
        </div>
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

      {/* <div>
        <SocialMedia />
      </div> */}
      <div>
        <Contact />
      </div>
      <span className="footer">Soul Apartment © 2020</span>
    </div>
  );
}

export default App;
