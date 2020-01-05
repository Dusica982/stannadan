import React, { Component } from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <form className="form" id="form">
          <h2 className="simpleSliderContact">Contact Us</h2>
          Contact us on email: <a href="mailto:webmaster@example.com">webmaster@example.com </a>
          or via Viber <a href="viber://chat/?number=%2381603024661">Viber Chat</a>,
          <a href="https://api.whatsapp.com/send?phone=15551234567"> Whatsup </a>
          or just call us at +381603024661.
        </form>
      </div>
    );
  }
}

export default Contact;
