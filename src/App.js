import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Photos from "./Photos";
import Manu from "./Manu";
import About from "./About";
import Contact from "./ContactUs";
import SocialMedia from "./SocialMedia";
import { languages } from "./LocalizedStrings";

function App() {
  const [lang, setLang] = useState("en");

  const setLangAndRerender = lang => {
    languages.setLanguage(lang);
    setLang(lang);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p className="logo">
            <img className="logoImg" src="./images/SlavijaSquareApartment.jpg.jpg" />
            Soul Apartment - Slavija Square
            <div className="allFlag">
              <img onClick={() => setLangAndRerender("rs")} className="flags" src="images/serbianflag.jpg" />
              <img onClick={() => setLangAndRerender("en")} className="flags" src="images/englishflag.jpg" />
              <img className="flags" src="images/chineseflag.jpg" />
            </div>
          </p>
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

      <div>
        <SocialMedia />
      </div>
      <div>
        <Contact />
      </div>
      <span className="footer">Soul Apartment © 2020</span>
    </div>
  );
}

export default App;
