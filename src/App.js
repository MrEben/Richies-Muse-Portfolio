import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Navbar';
import About from './components/about/about';
import Footer from './components/footer/Footer';
import Works from './components/works/Works';
import ScrollButton from './components/ScrollButton/scroll';
import Conn from './components/Conn/conn';

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <ScrollButton />
      <Works />
      <About />
      <Conn />
      <Footer />
    </>
  );
};

export default App;
