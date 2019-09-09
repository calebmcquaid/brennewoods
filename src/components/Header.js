import React from "react";
import styled from "styled-components";
import img from "../images/woodHero.jpg";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: url(${img});
  background-size: 100%;
  width: 100%;
  height: 25em;
  margin-top: 5.3em;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-content: center;
    background-image: url(${img});
    background-size: 100%;
    width: 500px;
    height: 15em;
    margin-top: 5.3em;

    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 22px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
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
