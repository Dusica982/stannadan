import React from "react";
// import { ButtonGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Manu extends React.Component {
  render() {
    return (
      <div className="wholemanu">
        <a className="manuTabs" href="#photos">
          Photos
        </a>
        <a className="manuTabs" href="#about">
          Soul Apartment
        </a>
        <a className="manuTabs" href="#form">
          Contact Us
        </a>
      </div>
    );
  }
}

export default Manu;
