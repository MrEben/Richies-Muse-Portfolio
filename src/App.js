import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Navbar';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import Works from './components/works/Works';
import ScrollButton from './components/ScrollButton/scroll';

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <ScrollButton />
      <Works />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
