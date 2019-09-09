import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em;
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (min-width: 577px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
  }
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
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
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
  }

  @media (min-width: 769px) and (max-width: 992px) {
  }

  @media (min-width: 993px) and (max-width: 1200px) {
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
