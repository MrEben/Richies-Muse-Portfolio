import React from 'react';
import './about.css';
import Img from '../header/images/new.jpg';

const About = () => {
  return (
    <>
      <section id="about">
        <h2>about Me</h2>
        <div className="container about__container">
          <img className="about-img" src={Img} alt="" />
          <div className="about-message">
            <h3>Richard Serwornu</h3>
            <p>Graphic designer</p>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quas nemo reiciendis quos consequatur, eveniet facilis nam minima
              reprehenderit illo et voluptatem asperiores. Praesentium,
              laboriosam sint architecto sunt nihil quam labore animi commodi
              quod unde, facere adipisci corrupti exercitationem in dolores
              porro! Minima, vel! Exercitationem totam laborum deserunt
              accusantium beatae.
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
