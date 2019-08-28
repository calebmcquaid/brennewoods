import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";
import styled from "styled-components";

const CarouselHeader = styled.h2`
  margin: 20px 0px 5px 20px;
`;

const ImgDiv = styled.div`
  width: 22em !important;
  height: 22em;
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
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    className: "slides"
  };
  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "10px" }}>
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
