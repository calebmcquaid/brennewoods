import React from "react";
import styled from "styled-components";
import "../style/App.css";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = title => {
  return (
    <div>
      <Header />
      <div>
        <Carousel title="Cutting Boards" />
        <Carousel title="Events" />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
