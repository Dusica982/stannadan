import React, { Component } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className="simpleSlider"> Soul Apartment</h2>
        <Tabs defaultActiveKey="location" id="about" className="aboutParagraphs">
          <Tab eventKey="location" title="Location">
            <p className="aboutLetters">
              <h2 className="aboutLetters">Soul Apartment Location</h2>
              Location Soul Apartment is a newly renovated and high standard studio apartment. Perfect location, only
              450m away from Slavija Square in Belgrade, make this apartment ideal combination for great sightseeing and
              convenient comfort breaks. Apartment is only 2km away from city center and you can reach it by foot go
              there with almost all lines - tram 2, trolley 19, 21, 22, 29 and bus 31. If you are coming in Belgrade by
              airplane, you will need only 15min from airplane to Soul Apartment. Central bus and railway stations are
              also close - less than 2.5 km away Belgrade Waterfront is also close, only 2km away.
            </p>
          </Tab>

          <Tab className="aboutLetters" eventKey="room" title="Room">
            <p className="aboutLetters">
              <h2>Room</h2>
              <ul className="aboutLetters">
                <li>Air-condition</li>
                <li>Free wi-fi</li>
              </ul>
            </p>
          </Tab>

          <Tab eventKey="kitchen" title="Kitchen">
            <p className="aboutLetters">
              <h2>Kitchen</h2>

              <ul className="aboutLetters">
                <li>Coffee machine</li>
                <li>Microwave oven</li>
                <li>Dishwashing mashine</li>
                <li>Refrigerator</li>
                <li>Kitchen sink</li>
              </ul>
            </p>
          </Tab>

          <Tab className="aboutLetters" eventKey="bathroom" title="Bathroom">
            <ul className="aboutLetters">
              <h2 className="aboutLetters">Bathroom</h2>
              <li>Shower</li>
              <li>Washing machine</li>
              <li>Hairdryer</li>
              <li>Towels</li>
            </ul>
          </Tab>
          <Tab className="aboutLetters" eventKey="distance" title="Distance">
            <ul className="aboutLetters">
              <h2 className="aboutLetters">Distance</h2>
              <li>Public transport - 350m</li>
              <li>Downtown - 2km</li>
              <li> Slavija Square- 350m</li>
              <li> Skadarlija - 2km</li>
              <li> Temple od St Sava - 500m</li>
              <li> Republic Square - 2km</li>
              <li> Nacional Assembly - 1.8km</li>
              <li> Kalemegdan - 2.5km</li>
              <li> Belgrade Waterfront - 2km</li>
              <li>Airport Nikola Tesla - 18km</li>
              <li>Train station - less than 2.5km</li>
              <li>Bus station - less than 2.5km</li>
              <li> Football Stadiums Red star and Partizan - 3km </li>
              <li>Shopping center Usce - 3km</li>
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default About;
