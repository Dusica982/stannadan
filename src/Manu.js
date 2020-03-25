import React from "react";
// import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { languages } from "./LocalizedStrings";

class Manu extends React.Component {
  render() {
    return (
      <div className="wholemanu">
        <a className="manuTabs" href="#photos">
          {languages.menuPhotos}
        </a>
        <a className="manuTabs" href="#about">
          {languages.menuSoulApartment}
        </a>
        <a className="manuTabs" href="#form">
          {languages.menuContactUs}
        </a>
      </div>
    );
  }
}

export default Manu;
