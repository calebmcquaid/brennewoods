import React from "react";
import Grid from "./components/Grid";
import "./style/App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Hero />
        <Grid />
      </div>
    );
  }
}

export default App;
