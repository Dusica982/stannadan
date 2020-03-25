import React, { Component } from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { languages } from "./LocalizedStrings";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <form className="form" id="form">
          <h2 className="simpleSliderContact">{languages.contactUsTitle}</h2>
          {languages.contactUsDescriptionFirstPart}
          <a href="mailto:webmaster@example.com"> webmaster@example.com </a>
          {languages.contactUsDescriptionSecondPart}
          <a href="viber://chat/?number=%2381603024661"> Viber Chat</a>,
          <a href="https://api.whatsapp.com/send?phone=15551234567"> Whatsup </a>
          {languages.contactUsDescriptionThirdPart}
        </form>
      </div>
    );
  }
}

export default Contact;
