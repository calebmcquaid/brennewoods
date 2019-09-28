import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";
import styled from "styled-components";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const CarouselHeader = styled.h2`
  margin: 20px 0px 5px 20px;
  color: white;
  opacity: 0.9;
`;

const ImgDiv = styled.div`
  width: 20em !important;
  height: 20em;
  margin: 20px;
`;

const ImageHolder = styled.img`
  width: 100%;
  height: 100%;
`;

const Carousel = props => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    className: "slides"
  };
  if (window.innerWidth > breakpoints.tablet) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth > breakpoints.mobile) {
    settings.slidesToShow = 1;
  } else if (window.innerWidth <= breakpoints.mobile) {
    settings.slidesToShow = 1;
  }
  //works on page load. need to update on DOM change

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "10px" }}>
      <CarouselHeader>{props.title}</CarouselHeader>
      <Slider {...settings}>
        <ImgDiv>
          <ImageHolder src={Img1} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Img2} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Img3} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Img1} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Img2} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Img3} />
        </ImgDiv>
      </Slider>
    </div>
  );
};

export default Carousel;
