import React from "react";
import "./style.css";
import Welcome from "../welcome";
import MiniContact from "../minicontact";
import Carousel from "../carousel";
import Book from "../book";

const Home = () => {
  return (
    <>
      {/* main section  */}
      <div className="wrapper">
        <div className="container">
          <div className="wrapper-card">
            <div className="home-card">
              <h4 className="home-subtitle">Caring for Life</h4>
              <h1 className="home-title">
                Leading the Way <br /> in Medical Excellence
              </h1>
              <button className="btn-blue">Our Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* welcome section  */}
      <Welcome />
      <Carousel />
      <Book />
      <MiniContact />
    </>
  );
};

export default Home;
