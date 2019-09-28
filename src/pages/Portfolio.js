import React from "react";
import styled from "styled-components";
import "../style/App.css";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Background = styled.div`
  margin-top: 6em;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 3em;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Portfolio = title => {
  return (
    <div>
      <Header />
      <Background>
        <Carousel title="Cutting Boards" />
        <hr style={{ marginTop: "3em", borderColor: "rgba(194, 97, 0, .5)" }} />
        <Carousel title="Events" />
      </Background>
      <Footer />
    </div>
  );
};

export default Portfolio;
