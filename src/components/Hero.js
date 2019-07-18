import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import heroImg from "../images/heroImg.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Comp = styled.div`
  animation: ${fadeIn} 2s linear;
  margin-right: -5em;
`;

const HeroImage = styled.img`
  width: 25em;
  height: 25em;
  margin-top: 5em;
  margin-left: 5em;
`;

const TextDiv = styled.div`
  width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 6em;
  margin-right: 5em;
  margin-left: -5em;
`;

const Hero = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Comp>
        <HeroImage src={heroImg} alt="woodworking under magnifier" />
      </Comp>
      <TextDiv>
        <h1>I'm Sam Brenneman</h1>
        <p>
          I work with my hands to make beautiful household objects that have a
          unique flair to them. I started making pieces for my friends, family,
          and grandchildren. People seem to enjoy my work and I now have an Etsy
          shop where I sell my latest creations.
        </p>
      </TextDiv>
    </div>
  );
};

export default Hero;
