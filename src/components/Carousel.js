import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";

class DemoCarousel extends Component {
  render() {
    return (
      <div style={{ marginTop: "3em" }}>
        <h1 style={{ marginLeft: "1em" }}>{this.props.title}</h1>
        <Carousel
          dynamicHeight
          showStatus={false}
          showThumbs={false}
          style={{ margin: "40px", backgroundColor: "white" }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "350px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto"
            }}
          >
            <img src={Img1} style={{ maxWidth: "100%", height: "auto" }} />
            <p className="legend">Cutting Boards for Makers Market</p>
          </div>
          <div
            style={{
              height: "350px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto"
            }}
          >
            <img src={Img2} style={{ maxWidth: "100%", height: "auto" }} />
            <p className="legend">Makers Market Booth</p>
          </div>
          <div
            style={{
              height: "350px",
              width: "500px",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto"
            }}
          >
            <img src={Img3} style={{ maxWidth: "100%", height: "100%" }} />
            <p className="legend">Cross section cutting board</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
