import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  width: 100%;
  padding: 10px;
  position: fixed;
  height: 4em;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: space-between;
  align-content: center;
  z-index: 1;

  h2 {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 1em;
    color: rgba(0, 0, 0, 1);
  }

  div {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 1em;
  }

  div > a {
    text-decoration: none;
    margin-right: 1em;
    color: rgba(0, 0, 0, 1);
    font-size: 1.1em;
    font-weight: 600;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 5px;
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, 0.9);
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-size: 100%;
    z-index: 1;

    h2 {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-left: 0.3em;
      color: rgba(0, 0, 0, 1);
      font-size: 1.5em;
    }

    div {
      display: flex;
      justify-content: right;
      align-items: center;
      margin-right: 0.3em;
    }

    div > a {
      text-decoration: none;
      margin-right: 1em;
      color: rgba(0, 0, 0, 1);
      transition: color 0.6s;
      font-size: 0.8em;
      font-weight: 600;
    }
  }
`;

const NavbarTwo = () => {
  return (
    <Styled>
      <h2>Brennewoods</h2>
      <div>
        <a href="#">Portfolio Page</a>
        <a href="mailto:brennewoods@gmail.com">Contact Me</a>
        <a href="https://www.etsy.com/shop/BrenneWoods">Shop</a>
      </div>
    </Styled>
  );
};

export default NavbarTwo;
