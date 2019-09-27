import React from "react";
import Grid from "../components/Grid";
import "../style/App.css";
import NavbarTwo from "../components/NavbarTwo";
import HeaderHero from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <NavbarTwo /> */}
        <HeaderHero />
        <Hero />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default Home;
