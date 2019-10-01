import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";
import Ab0 from "../images/abstract/ab00.jpg";
import Ab1 from "../images/abstract/ab01.jpg";
import Ab2 from "../images/abstract/ab02.jpg";
import Ab3 from "../images/abstract/ab03.jpg";
import Ab4 from "../images/abstract/ab04.jpg";
import Ab5 from "../images/abstract/ab05.jpg";
import Ab6 from "../images/abstract/ab06.jpg";
import Ab7 from "../images/abstract/ab07.jpg";
import Ab8 from "../images/abstract/ab08.jpg";
import Ab9 from "../images/abstract/ab09.jpg";
import Ab10 from "../images/abstract/ab10.jpg";
import Ab11 from "../images/abstract/ab11.jpg";
import Ab12 from "../images/abstract/ab12.jpg";
import Ab13 from "../images/abstract/ab13.jpg";
import Ab14 from "../images/abstract/ab14.jpg";
import Ab15 from "../images/abstract/ab15.jpg";
import Ab16 from "../images/abstract/ab16.jpg";
import Ab17 from "../images/abstract/ab17.jpg";

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

const ABCarousel = props => {
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
          <ImageHolder src={Ab0} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab1} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab2} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab3} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab4} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab5} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab6} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab7} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab8} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab9} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab10} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab11} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab12} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab13} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab14} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab15} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab16} />
        </ImageDiv>
        <ImageDiv>
          <ImageHolder src={Ab17} />
        </ImageDiv>
      </Slider>
    </div>
  );
};

export default ABCarousel;
