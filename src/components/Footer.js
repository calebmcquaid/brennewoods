import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5em;
  p {
    margin-bottom: 5px;
  }
  li {
    list-style: none;
    font-size: 14px;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  margin-right: 3em;
  div {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }
  div > li {
    text-decoration: none;
    list-style: none;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <TitleDiv>
        <p>Brennewoods - Custom woodworking by Sam Brenneman</p>
        <li>&copy; Copyright 2019</li>
      </TitleDiv>
      <MenuDiv>
        <div>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
        </div>
        <div>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </div>
      </MenuDiv>
    </FooterDiv>
  );
};

export default Footer;
