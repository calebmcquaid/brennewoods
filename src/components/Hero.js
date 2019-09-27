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
  width: 100%;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

const HeroImage = styled.img`
  width: 25em;
  height: 25em;
  margin-top: 5em;
  margin-left: 5em;
  @media (max-width: 576px) {
    display: flex;
    margin: 2.5em auto 0em auto;
    width: 20em;
    height: 20em;
  }
  @media (min-width: 577px) and (max-width: 768px) {
    display: flex;
    margin: 2.5em auto 0em;
    width: 20em;
    height: 20em;
  }

  @media (min-width: 769px) and (max-width: 992px) {
    display: flex;
    width: 20em;
    height: 20em;
    margin-top: 2.5em;
    margin-right: 3em;
    margin-left: 2.5em;
  }
`;

const TextDiv = styled.div`
  width: 25em;
  height: 25em;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 6em;
  margin-right: 5em;
  p {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    height: 100%;
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 31px;
    }
    p {
      font-size: 18px;
      margin: 0em 1.5em 0em 1.5em;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    margin-top: 1em;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 31px;
    }
    p {
      font-size: 18px;
      margin: 0em 1.5em;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    margin-top: 1em;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 0em;

    h1 {
      font-size: 29px;
    }
    p {
      font-size: 16px;
      margin: 0em 2.5em 0em 1em;
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
          <p>
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
