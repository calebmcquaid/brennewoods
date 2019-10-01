import React from "react";
import styled from "styled-components";
import "../style/App.css";
import CBCarousel from "../components/CBCarousel";
import EventsCarousel from "../components/EventsCarousel";
import ABCarousel from "../components/ABCarousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Background = styled.div`
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
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
        <CBCarousel title="Cutting Boards" />
        <hr style={{ marginTop: "3em", borderColor: "rgba(194, 97, 0, .5)" }} />
        <ABCarousel title="Abstract" />
        <hr style={{ marginTop: "3em", borderColor: "rgba(194, 97, 0, .5)" }} />
        <EventsCarousel title="Events" />
      </Background>
      <Footer />
    </div>
  );
};

export default Portfolio;
