import React from "react";
import Grid from "./components/Grid";
import "./style/App.css";
import Navbar from "./components/Navbar";
import HeaderHero from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./Portfolio";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HeaderHero />
        <Hero />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
