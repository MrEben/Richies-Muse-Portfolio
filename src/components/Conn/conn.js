import { useRef } from "react";
import "./conn.css";
import emailjs from "emailjs-com";
import { options } from "./data";
import { social } from "../nav/data";

const Conn = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs.sendForm(
      "service_aquqlaa",
      "template_gawje79",
      form.current,
      "YNxnhoPemMu24c9Yx"
    );
  };

  return (
    <section id="contact" className="conn container">
      <article className="head">
        <h2>Contact me</h2>
        <h3>Any question or remarks? just write me a message</h3>
      </article>
      <div className="contact-container">
        <article className="main-contact-section">
          <div className="contact-info">
            <div className="contain-all">
              <div className="head-ing">
                <h2>contact informaton</h2>
                <h4>
                  fill up the form and i wil get back to you within 24hours
                </h4>
                {options.map((item) => {
                  const { id, icon, info, link } = item;
                  return (
                    <article key={id} className="options">
                      <a className="option-link" target="_blank" href={link}>
                        <div className="icon-here">{icon}</div>
                        <h4>{info}</h4>
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="lower">
              <ul className="social-icons-here">
                {social.map((socialIcon) => {
                  const { id, url, icon } = socialIcon;
                  return (
                    <li key={id}>
                      <a target="_blank" href={url}>
                        {icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="box-1">
                <div className="box-2"></div>
              </div>
            </div>
          </div>
          <div className="right-acesses">
            <form ref={form} onSubmit={sendEmail}>
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
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                send message
              </button>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Conn;
