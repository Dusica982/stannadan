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
          <div>
            <img src="images/stannadan1.jpg" className="homePageSlider" />
          </div>
          <div>
            <img src="images/stannadan2.jpg" className="homePageSlider" />
          </div>
          <div>
            <img src="images/stannadan3.jpg" className="homePageSlider" />
          </div>
          <div>
            <img src="images/stannadan4.jpg" className="homePageSlider" />
          </div>
          <div>
            <img src="images/stannadan5.jpg" className="homePageSlider" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Photos;
