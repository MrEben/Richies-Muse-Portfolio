import './conn.css';
import { options } from './data';
import { social } from '../nav/data';

const Conn = () => {
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
              <div className="heading">
                <h2>contact informaton</h2>
                <h4>
                  fill up the form and i wil get back to you within 24hours
                </h4>
                {options.map((item) => {
                  const { id, icon, info, link } = item;
                  return (
                    <article key={id} className="options">
                      <a className="option-link" href={link}>
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
                      <a href={url}>{icon}</a>
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
            {/* <div className="upper-section">
              <div className="left-sec inputs">
                <form action="">
                  <label>first name</label>
                  <input
                    className="inputs"
                    type="text"
                    name="FirstName"
                    placeholder="Your first name here..."
                    required
                  />
                  <label>last name</label>
                  <input
                    className="inputs"
                    type="text"
                    name="lastName"
                    placeholder="Your last name here..."
                    required
                  />
                </form>
              </div>
              <div className="right inputs">
                <form action="">
                  <label>email</label>
                  <input
                    className="inputs"
                    type="text"
                    name="email"
                    placeholder="Your email here..."
                    required
                  />
                  <label>phone</label>
                  <input
                    className="inputs"
                    type="text"
                    name="email"
                    placeholder="Your number here..."
                    required
                  />
                </form>
              </div>
            </div>
            <div className="lower-section">
              <div className="right inputs">
                <label>message</label>
                <form action="">
                  <textarea
                    className="inputs"
                    type="text"
                    name="message"
                    rows="5"
                    placeholder="Your Message Here"
                  ></textarea>
                  <button type="submit" className="btn btn-primary">
                    send message
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Conn;
