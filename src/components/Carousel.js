import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";
import styled from "styled-components";

const ImgDiv = styled.div`
  width: 30em !important;
  height: 30em;
  background: cover;
  margin: 20px;
`;

const ImageHolder = styled.img`
  width: 100%;
  height: 100%;
`;

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    width: 75
  };
  return (
    <div>
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
          <h3>4</h3>
        </ImgDiv>
        <ImgDiv>
          <h3>5</h3>
        </ImgDiv>
        <ImgDiv>
          <h3>6</h3>
        </ImgDiv>
      </Slider>
    </div>
  );
};

export default Carousel;
