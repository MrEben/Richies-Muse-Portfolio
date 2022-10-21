import React, { useState, useEffect } from 'react';
import './header.css';
import Img from './images/new.jpg';

const Header = () => {
  const [show, setshow] = useState(false);
  const checkWidth = () => {
    if (window.innerWidth >= 720) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', checkWidth);
  }, []);
  return (
    <>
      <header id="header">
        <div className="container main__header_container">
          <div className="main__header_left">
            <h4>Welcome to my potfolio</h4>
            {show ? (
              <h1>I'M RICHARD,graphic designer</h1>
            ) : (
              <h2>I'M RICHARD,graphic designer</h2>
            )}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium velit dicta animi excepturi necessitatibus expedita
            </p>
            <div className="btns">
              <a href="#works" className="btn">
                view works
              </a>
              <a href="#contact" className="btn extra">
                contact me
              </a>
            </div>
          </div>
          <div className="main__header_right">
            <div className="main__header-square"></div>
            <div className="main__header-image">
              <img className="homepage-img" src={Img} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
