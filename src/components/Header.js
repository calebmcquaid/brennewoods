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

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

const Header = () => {
  return (
    <Banner>
      <h1>Handmade woodwork, crafted with care</h1>
    </Banner>
  );
};

export default Header;
