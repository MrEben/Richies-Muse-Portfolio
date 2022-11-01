import React from 'react';
import './about.css';
import Img from '../../assets/pic-12.jpg';
import { experiences } from './data';

const About = () => {
  return (
    <>
      <section id="about">
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-img">
              <img className="about-img" src={Img} alt="" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              {experiences.map((item) => {
                const { id, work, icon, experience } = item;
                return (
                  <article key={id} className="about__card">
                    <div className="about__icon">{icon}</div>
                    <h5>{work}</h5>
                    <small>{experience}</small>
                  </article>
                );
              })}
            </div>
            <p>
              LThe primary objective of any design is to speak to it's customers
              effectively to convey messages and ideas. As a designer, I ensure
              that the custumer understands the objective of the design
              effectively. I ensure with mulyiple tools depending on the medium
              and goals of the final project.
              Praesentium,
            </p>
            <a href="#contact" className="btn btn-primary">
              lets talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
