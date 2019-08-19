import React from "react";
import Navbar from "./components/Navbar";
import "./style/App.css";
import Carousel from "./components/Carousel";

const Portfolio = title => {
  return (
    <div>
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Portfolio;
