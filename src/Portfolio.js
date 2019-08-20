import React from "react";
import Navbar from "./components/Navbar";
import "./style/App.css";
import Carousel from "./components/Carousel";

const Portfolio = title => {
  return (
    <div>
      <Navbar />
      <Carousel title="Cutting Boards" />
      <Carousel title="Events" />
    </div>
  );
};

export default Portfolio;
