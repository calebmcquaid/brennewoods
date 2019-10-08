import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";
import Wa0 from "../images/wall-art/wa00.jpg";
import Wa1 from "../images/wall-art/wa01.jpg";
import Wa2 from "../images/wall-art/wa02.jpg";
import Wa3 from "../images/wall-art/wa03.jpg";
import Wa4 from "../images/wall-art/wa04.jpg";
import Wa5 from "../images/wall-art/wa05.jpg";


import styled from "styled-components";

const CarouselHeader = styled.h2`
  margin: 20px 0px 5px 20px;
  color: white;
  opacity: 0.9;
`;

const ImageHolder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageDiv = styled.div`
  width: 20em !important;
  height: 20em;
  margin: 20px;
`;

const WACarousel = props => {
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
        <ImageDiv>
          <ImageHolder src={Wa0} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Wa1} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Wa2} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Wa3} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Wa4} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Wa5} />
        </ImageDiv>
      </Slider>
    </div>
  );
};

export default WACarousel;
