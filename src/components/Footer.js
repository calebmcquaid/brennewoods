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
  div {
    display: flex;
    align-items: baseline;
  }
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

  div > li > a {
    text-decoration: none;
    color: black;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <TitleDiv>
        <div>
          <p style={{ fontSize: "18px" }}>Brennewoods&nbsp;</p>
          <p style={{ fontSize: "15px" }}>
            - Custom woodworking by Sam Brenneman
          </p>
        </div>
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
