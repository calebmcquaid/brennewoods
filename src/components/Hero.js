import React from "react";
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
  display: flex;
  justify-content: space-around;
  width: 100%l @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeroImage = styled.img`
  width: 25em;
  height: 25em;
  margin-top: 5em;
  margin-left: 5em;
  @media (max-width: 576px) {
    width: 20em;
    height: 20em;
  }
`;

const TextDiv = styled.div`
  width: 10em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 6em;
  margin-right: 5em;
  @media (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    margin-left: 6em;
    h1 {
      font-size: 31px;
    }
  }
`;

const Hero = () => {
  return (
    <div>
      <Comp>
        <HeroImage src={heroImg} alt="woodworking with chainsaw" />

        <TextDiv>
          <h1>I&rsquo;m Sam Brenneman</h1>
          <p style={{ fontSize: "20px" }}>
            I work with my hands to make beautiful household objects that have a
            unique flair to them. I started making pieces for my friends,
            family, and grandchildren. People seem to enjoy my work and I now
            have an Etsy shop where I sell my latest creations.
          </p>
        </TextDiv>
      </Comp>
    </div>
  );
};

export default Hero;
