import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../images/image1.png";
import Img2 from "../images/image2.png";
import Img3 from "../images/image3.png";
import Ab0 from "../images/abstract/ab00.jpg"
import Ab1 from "../images/abstract/ab01.jpg"
import Ab2 from "../images/abstract/ab02.jpg"
import Ab3 from "../images/abstract/ab03.jpg"
import Ab4 from "../images/abstract/ab04.jpg"
import Ab5 from "../images/abstract/ab05.jpg"
import Ab6 from "../images/abstract/ab06.jpg"
import Ab7 from "../images/abstract/ab07.jpg"
import Ab8 from "../images/abstract/ab08.jpg"
import Ab9 from "../images/abstract/ab09.jpg"
import Ab10 from "../images/abstract/ab10.jpg"
import Ab11 from "../images/abstract/ab11.jpg"
import Ab12 from "../images/abstract/ab12.jpg"
import Ab13 from "../images/abstract/ab13.jpg"
import Ab14 from "../images/abstract/ab14.jpg"
import Ab15 from "../images/abstract/ab15.jpg"
import Ab16 from "../images/abstract/ab16.jpg"
import Ab17 from "../images/abstract/ab17.jpg"


import styled from "styled-components";

const CarouselHeader = styled.h2`
  margin: 20px 0px 5px 20px;
  color: white;
  opacity: 0.9;
`;

const ImageHolder = styled.img`
  width: 20em !important;
  height: 20em;
  margin: 20px;
`;

// const people=['Per1', 'Per2', 'Per3']
// {
//   people.map(function(name, index){
//     return <Person item={index} name={name}/>
//   })
// }

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
        <ImageHolder src={Ab0} />
        <ImageHolder src={Ab1} />
        <ImageHolder src={Ab2} />
        <ImageHolder src={Ab3} />
        <ImageHolder src={Ab4} />
        <ImageHolder src={Ab5} />
        <ImageHolder src={Ab6} />
        <ImageHolder src={Ab7} />
        <ImageHolder src={Ab8} />
        <ImageHolder src={Ab9} />
        <ImageHolder src={Ab10} />
        <ImageHolder src={Ab11} />
        <ImageHolder src={Ab12} />
        <ImageHolder src={Ab13} />
        <ImageHolder src={Ab14} />
        <ImageHolder src={Ab15} />
        <ImageHolder src={Ab16} />
        <ImageHolder src={Ab17} />
      </Slider>
    </div>
  );
};

export default ABCarousel;
