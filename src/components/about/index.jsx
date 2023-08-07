import React from "react";
import "./style.css";
import MiniCard from "../minicontact";
import aboutImg from "../../assets/images/about-image.png";
import aboutSvg from "../../assets/icons/about-circle.png";
import wrapperIcon from "../../assets/icons/qo'shtirnoq.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="shadow">
          <div className="container">
            <div className="about-title">
              <p>
                <span>Home</span> / <span>About</span>
              </p>
              <h2>About us</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="about-cards">
          <div className="about-image">
            <img src={aboutImg} alt="img" />
          </div>
          <div className="about-content">
            <p className="content-title">Welcome to Hospital name</p>
            <h2>
              Best Care for Your
              <br /> Good Health
            </h2>
            <div className="about-radio">
              <div className="radio-start">
                <p>
                  <img src={aboutSvg} alt="img" /> A Passion for Healing
                </p>
                <p>
                  <img src={aboutSvg} alt="img" /> All our best
                </p>
                <p>
                  <img src={aboutSvg} alt="img" /> Always Caring
                </p>
              </div>
              <div className="radio-end">
                <p>
                  <img src={aboutSvg} alt="img" /> 5-Star Care
                </p>
                <p>
                  <img src={aboutSvg} alt="img" /> Believe in Us
                </p>
                <p>
                  <img src={aboutSvg} alt="img" /> A Legacy of Excellence
                </p>
              </div>
            </div>

            <div className="content-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque tortor ornare ornare Convallis felis vitae tortor
                augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque. Convallis felis vitae tortor augue. Velit
                nascetur proin massa in.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="about-us">
        <div className="shadow-us">
          <div className="container">
            <div className="about-wrapper">
              <div className="wrapper-icon">
                <img src={wrapperIcon} alt="img" />
              </div>
              <p className="wrapper-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Quisque placerat
                scelerisque felis vitae tortor augue. Velit nascetur Consequat
                faucibus porttitor enim et.
              </p>
              <div className="wrapper-line"></div>
              <div className="wrapper-name">
                <p>John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* minicontact  */}
      <MiniCard />
    </>
  );
};

export default About;
