import React from "react";
import "./style.css";
import Touch from "../touch";

const Contact = () => {
  return (
    <div>
      <section className="aloqa">
        <div className="shadow">
          <div className="container">
            <div className="aloqaWrap">
              <div className="texts">
                <p>
                  <span>Home </span>/<span> Contact </span>
                </p>
                <h2>Our Contacts</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="maps">
        <div className="container">
          <div className="mapgoogle">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d47965.1677935792!2d69.21912320000001!3d41.2909568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1690977746067!5m2!1sru!2s"
              style={{
                width: "100%",
                height: "450px",
                border: 0,
              }}
              title="Google Maps Embed"
            ></iframe>
          </div>
        </div>
      </section>
      <Touch />
    </div>
  );
};

export default Contact;
