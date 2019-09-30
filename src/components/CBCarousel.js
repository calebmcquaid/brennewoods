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

const CBCarousel = props => {
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
        <ImageHolder src={Img1} />

        <ImageHolder src={Img2} />

        <ImageHolder src={Img3} />

        <ImageHolder src={Img1} />

        <ImageHolder src={Img2} />

        <ImageHolder src={Img3} />
      </Slider>
    </div>
  );
};

export default CBCarousel;
