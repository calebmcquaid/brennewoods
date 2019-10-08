import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Co00 from "../images/custom-orders/co00.jpg";
import Co01 from "../images/custom-orders/co01.jpg";
import Co02 from "../images/custom-orders/co02.jpg";
import Co03 from "../images/custom-orders/co03.jpg";
import Co04 from "../images/custom-orders/co04.jpg";
import Co05 from "../images/custom-orders/co05.jpg";
import Co06 from "../images/custom-orders/co06.jpg";
import Co07 from "../images/custom-orders/co07.jpg";
import Co08 from "../images/custom-orders/co08.jpg";
import styled from "styled-components";

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
  object-fit: cover;
`;

const COCarousel = props => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    className: "slides",
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1085,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ width: "100%", margin: "0 auto", padding: "10px" }}>
      <CarouselHeader>{props.title}</CarouselHeader>
      <Slider {...settings}>
        <ImgDiv>
          <ImageHolder src={Co00} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co01} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co02} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co03} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co04} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co05} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co06} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co07} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Co08} />
        </ImgDiv>
      </Slider>
    </div>
  );
};

export default COCarousel;
