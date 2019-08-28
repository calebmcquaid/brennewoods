import React from "react";
import NavbarTwo from "./components/NavbarTwo";
import "./style/App.css";
import Carousel from "./components/Carousel";

const Portfolio = title => {
  return (
    <div>
      <NavbarTwo />
      <Carousel title="Cutting Boards" />
      <Carousel title="Events" />
    </div>
  );
};

export default Portfolio;
