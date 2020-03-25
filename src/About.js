import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { languages } from "./LocalizedStrings";

class About extends React.Component {
  render() {
    return (
      <div>
        <h2 className="simpleSlider" id="about">
          {" "}
          {languages.soulApartmentTitle}
        </h2>
        <Tabs defaultActiveKey="location" className="aboutParagraphs">
          <Tab eventKey="location" title={languages.locationTabTitle}>
            <p className="aboutLetters">
              <h2 className="aboutLetters">{languages.locationTabMainTitle}</h2>
              <img className="map" src="images/map-apartment-bircaninova-slavija.jpg" />
              <img className="map" src="images/street-view.jpg" />
              {languages.locationTabDescription}
            </p>
          </Tab>

          <Tab className="aboutLetters" eventKey="room" title={languages.roomTabTitle}>
            <p className="aboutLetters">
              <h2>{languages.roomTabMainTitle}</h2>
              <ul className="aboutLetters">
                <li>{languages.roomTabDescriptioItemAir}</li>
                <li>{languages.roomTabDescriptioItemWifi}</li>
              </ul>
            </p>
          </Tab>

          <Tab eventKey="kitchen" title={languages.kitchenTabTitle}>
            <p className="aboutLetters">
              <h2>{languages.kitchenTabMainTitle}</h2>

              <ul className="aboutLetters">
                <li>{languages.kitchenCoffeeMachine}</li>
                <li>{languages.kitchenMicrowaveOven}</li>
                <li>{languages.kitchenDishwashingMashine}</li>
                <li>{languages.kitchenRefrigerator}</li>
                <li>{languages.kitchenKitchenSink}</li>
              </ul>
            </p>
          </Tab>

          <Tab className="aboutLetters" eventKey="bathroom" title={languages.bathroomTabTitle}>
            <ul className="aboutLetters">
              <h2 className="aboutLetters">{languages.bathroomTabMainTitle}</h2>
              <li>{languages.bathroomShower}</li>
              <li>{languages.bathroomWashingMachine}</li>
              <li>{languages.bathroomHairdryer}</li>
              <li>{languages.bathroomTowels}</li>
            </ul>
          </Tab>
          <Tab className="aboutLetters" eventKey="distance" title={languages.distanceTabTitle}>
            <ul className="aboutLetters">
              <h2 className="aboutLetters">{languages.distanceTabMainTitle}</h2>
              <li>{languages.distancePublicTransport}</li>
              <li>{languages.distanceDowntown}</li>
              <li>{languages.distanceSlavijaSquare}</li>
              <li>{languages.distanceSkadarlija}</li>
              <li>{languages.distanceTempleOfStSava}</li>
              <li>{languages.distanceRepublicSquare}</li>
              <li>{languages.distanceNacionalAssembly}</li>
              <li>{languages.distanceKalemegdan}</li>
              <li>{languages.distanceBelgradeWaterfront}</li>
              <li>{languages.distanceAirportNikolaTesla}</li>
              <li>{languages.distanceTrainStation}</li>
              <li>{languages.distanceBusStation}</li>
              <li>{languages.distanceFootballStadiumsRedStarAndPartizan}</li>
              <li>{languages.distanceShoppingCenterUsce}</li>
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default About;
