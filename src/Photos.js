import React, { Component } from "react";
import Slider from "react-slick";

class Photos extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div id="photos">
        <h2 className="simpleSlider"> Photos</h2>
        <Slider {...settings}>
          <div className="homePageSlider">
            <img src="images/stannadan1.jpg" />
          </div>
          <div className="homePageSlider">
            <img src="images/stannadan2.jpg" />
          </div>
          <div className="homePageSlider">
            <img src="images/stannadan3.jpg" />
          </div>
          <div className="homePageSlider">
            <img src="images/stannadan4.jpg" />
          </div>
          <div className="homePageSlider">
            <img src="images/stannadan5.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Photos;
