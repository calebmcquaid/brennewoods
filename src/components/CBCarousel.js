import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cb1 from "../images/cutting-board/cb01.jpg";
import Cb2 from "../images/cutting-board/cb02.jpg";
import Cb3 from "../images/cutting-board/cb03.jpg";
import Cb4 from "../images/cutting-board/cb04.jpg";
import Cb5 from "../images/cutting-board/cb05.jpg";
import Cb6 from "../images/cutting-board/cb06.jpg";
import Cb7 from "../images/cutting-board/cb07.jpg";
import Cb8 from "../images/cutting-board/cb08.jpg";
import Cb9 from "../images/cutting-board/cb09.jpg";
import Cb10 from "../images/cutting-board/cb10.jpg";
import Cb11 from "../images/cutting-board/cb11.jpg";
import Cb12 from "../images/cutting-board/cb12.jpg";
import Cb13 from "../images/cutting-board/cb13.jpg";

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

const ImgDiv = styled.div`
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
        <ImgDiv>
          <ImageHolder src={Cb1} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb2} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb3} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb4} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb5} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb6} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb7} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb8} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb9} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb10} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb11} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb12} />
        </ImgDiv>
        <ImgDiv>
          <ImageHolder src={Cb13} />
        </ImgDiv>
      </Slider>
    </div>
  );
};

export default CBCarousel;
