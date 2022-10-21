import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import Img from '../header/images/new.jpg';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="underline"></div>
      <div className="container contact__container">
        <div className="upper">
          <img className="contact-img" src={Img} alt="" />
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name Here..."
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email Here..."
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message Here"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              send message
            </button>
          </form>
        </div>
        <div className="contact__options">
          <article className="each-option">
            <MdOutlineEmail className="icon" />
            <h4>email</h4>
            <h5>richardmuse@gmail.com</h5>
            <a target="_blank" href="mailto:richardmuse@gmail.com">
              send a message
            </a>
          </article>
          <article className="each-option">
            <BsWhatsapp className="icon" />
            <h4>Whatsapp</h4>
            <h5>+233 846 7465</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?=+2335488921809"
            >
              send a message
            </a>
          </article>
          <article className="each-option">
            <RiMessengerLine className="icon" />
            <h4>Messenger</h4>
            <h5>busydevonfacebook</h5>
            <a href="https://m.me/busydev" target="_blank">
              send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
