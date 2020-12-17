import React, { Component } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SectionSlider from "./components/sections/slider/SectionSlider";
import SectionAbout from "./components/sections/about/SectionAbout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SectionSlider></SectionSlider>
        <SectionAbout></SectionAbout>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
