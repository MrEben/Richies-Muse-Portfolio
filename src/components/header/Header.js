import React, { useState, useEffect } from "react";
import "./header.css";
import Crop1 from "../../assets/crop1.png";
import Crop2 from "../../assets/crop2.png";
import Crop3 from "../../assets/crop3.png";
import Crop4 from "../../assets/crop4.png";
import Brand from "../../assets/yell circle logo.png";
import Combined from "../../assets/combined-1.png";

const Header = () => {
  return (
    <>
      <header id="header">
        <div class="heading">
          <h1 className="animate__fadeInLeft">welcome to the future of excellent designs</h1>
        </div>
        <div class="heading-content">
          <div class="main-heading-container">
            <div class="descriptions">
              <div class="work-rate">
                <h2>100+ clients</h2>
                <p>neat designs, work on time,exceptional works</p>
              </div>
              <div class="percentage">
                <h2>60%</h2>
                <p>neat designs, work on time,exceptional works</p>
              </div>
              <div class="connect">
                <img class="desc-img" src={Combined} alt="img here" srcset="" />
                <p>richies</p>
                <p>muse</p>
              </div>
            </div>
            <div class="photoss-section">
              <div class="photos-here">
                <div class="sec-1">
                  <div class="img-contain-1">
                    <img src={Crop4} alt="image here" srcset="" />
                  </div>
                </div>
                <div class="sec-2">
                  <div class="img-contain-2">
                    <img src={Crop1} alt="image here" srcset="" />
                  </div>
                </div>
                <div class="sec-3">
                  <div class="img-contain-3">
                    <img src={Crop2} alt="img here" srcset="" />
                  </div>
                </div>
                <div class="sec-4">
                  <div class="img-contain-4">
                    <img src={Crop3} alt="image here" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="brand-identity">
              <div class="brand-desc">
                <div class="brand-background"></div>
                <div class="brand-text">
                  <h4>UNIQUE DESIGN</h4>
                  <div class="brand-underline"></div>
                  <h3>Popular brands' number one stop shop</h3>
                </div>
              </div>
              <div class="brand-img">
                <img src={Brand} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
