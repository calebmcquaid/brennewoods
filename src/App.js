import React from "react";
import Grid from "./components/Grid";
import "./style/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Hero />
        <Grid />
        <Footer />
      </div>
    );
  }
}

export default App;
