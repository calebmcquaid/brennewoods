import React from "react";
import styled from "styled-components";
import img from "../images/updatedWoodHero.jpg";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: url(${img});
  -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  background-size: cover;
  width: 100%;
  height: 25em;
  margin-top: 5.3em;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-content: center;
    background-image: url(${img});
    background-size: 100%;
    height: 15em;
    margin-top: 5em;

    h1 {
      font-size: 22px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    height: 17.5em;
    h1 {
      font-size: 24px;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    height: 21em;
  }
`;

const HeaderHero = () => {
  return (
    <Banner>
      <h1>Handmade woodwork, crafted with care</h1>
    </Banner>
  );
};

export default HeaderHero;
