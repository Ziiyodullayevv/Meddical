import React from "react";
import "./style.css";

const Touch = () => {
  return (
    <section>
      <div className="container">
        <div className="touchWrap">
          <div className="left">
            <div className="up">
              <h3>Get in touch</h3>
              <h2>Contact</h2>
            </div>
            <div className="down">
              <div className="nameMail">
                <div className="div name">
                  <input type="text" placeholder="Name" />
                </div>
                <div id="email" className="div">
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="subject">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="message">
                <input type="text" placeholder="Message" />
              </div>
              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="horizon">
              <div className="contactCards">
                <div className="scripts">
                  <h3>EMERGENCY</h3>
                  <h4>(237) 681-812-255</h4>
                  <h4>(237) 666-331-894</h4>
                </div>
              </div>
              <div className="contactCards">
                <div className="scripts">
                  <h3>LOCATION</h3>
                  <h4>0123 Some place</h4>
                  <h4>9876 Some country</h4>
                </div>
              </div>
            </div>
            <div className="horizon">
              <div className="contactCards">
                <div className="scripts">
                  <h3>EMAIL</h3>
                  <h4>fildineeesoe@gmil.com</h4>
                  <h4>myebstudios@gmail.com</h4>
                </div>
              </div>
              <div className="contactCards">
                <div className="scripts">
                  <h3>WORKING HOURS</h3>
                  <h4>Mon-Sat 09:00-20:00</h4>
                  <h4>Sunday Emergency only</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
