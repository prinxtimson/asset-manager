import React, { Component } from "react";
import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";


class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
    <Content />
    <Footer />
      </div>
     

    );
  }
}

export default Home;
