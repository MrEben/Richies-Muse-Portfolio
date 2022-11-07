import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Navbar";
import About from "./components/about/about";
import Footer from "./components/footer/Footer";
import Works from "./components/works/Works";
import ScrollButton from "./components/ScrollButton/scroll";
import Conn from "./components/Conn/conn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <ScrollButton />
        <Works />
        <About />
        <Conn />
        <Footer />
      </Router>
    </>
  );
};

export default App;
