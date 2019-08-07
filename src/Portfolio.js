import React from "react";
import Navbar from "./components/Navbar";
import "./style/App.css";
import DemoCarousel from "./components/Carousel";

const Portfolio = title => {
  return (
    <div>
      <DemoCarousel title="Cutting Boards" />
      <DemoCarousel title="Events" />
      <DemoCarousel title="Miscellaneous" />
    </div>
  );
};

export default Portfolio;
