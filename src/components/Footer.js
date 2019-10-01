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
  @media (max-width: 576px) {
    margin: 0em;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
    }
    p {
      margin-bottom: 0px;
    }
    p:nth-child(2) {
      margin-bottom: 5px;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    margin: 0em;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
    }
    p {
      margin-bottom: 0px;
    }
    p:nth-child(2) {
      margin-top: 3px;
      margin-bottom: 5px;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin: 0em;
    display: flex;
    flex-direction: column;
    margin-left: 2em div {
      display: flex;
      flex-direction: column;
    }
    p {
      margin-bottom: 0px;
    }
    p:nth-child(2) {
      margin-top: 3px;
      margin-bottom: 5px;
    }
  }
`;

const MenuDiv = styled.div`
  display: flex;
  margin-right: 5em;
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
  @media (max-width: 576px) {
    margin: 0em;
    display: flex;
    flex-direction: column;
    div {
      margin: 1em 1em 0em 1em;
    }
    div:nth-child(2) {
      margin: 0em 1em;
    }
  }
  @media (min-width: 577px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    div {
      margin: 1em 1em 0em 1em;
    }
    div:nth-child(2) {
      margin: 0em 1em;
    }
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
            <a href="/portfolio/">Portfolio</a>
          </li>
          <li>
            <a href="mailto:brennewoods@gmail.com">Contact</a>
          </li>
          <li>
            <a href="https://www.etsy.com/shop/BrenneWoods">Shop</a>
          </li>
        </div>
      </MenuDiv>
    </FooterDiv>
  );
};

export default Footer;
