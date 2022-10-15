import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Navbar';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
import Works from './components/works/Works';

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Works />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
