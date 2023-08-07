import React, { useState } from "react";
import "./style.css";
import Xizmatlar from "../xizmatlar";

const Shifoxona = () => {
  const storedHospitals = localStorage.getItem("hospitals");
  const hospitals = JSON.parse(storedHospitals);

  const [doctor, setDoctor] = useState([]);
  setDoctor(hospitals);

  return (
    <>
      <section className="shifo-header">
        <div className="shadow">
          <div className="container">
            <div className="shifo-header__title">
              <p>
                <span>Home</span> / <span>Shifoxonalar</span> /
                <span>Shifoxona</span>
              </p>
              <h2>Bizning Shifoxona</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="doctors">
        <div className="container">
          <div className="doctors-title">
            <div className="global-subtitle">Sog'lom Bo'ling</div>
            <div className="global-title top-20">Bizning Shifokorlarimiz</div>
          </div>

          <div className="shifoxonalar-cards card-gap">
            {doctor?.map(
              ({ id, first_name, speciality, last_name, work_day }) => {
                return (
                  <div key={id} className="shifoxonalar-card height">
                    <div className="card-image">
                      <img
                        src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="clinic"
                      />
                    </div>
                    <div className="card-description width">
                      <div>
                        <p style={{ textTransform: "capitalize" }}>
                          {first_name} {last_name}
                        </p>
                        <h4 className="top-10">{speciality}</h4>
                        <p className="top-10"></p>
                      </div>
                      <p>Ish kunlari:</p>
                      <div className="week">
                        <p className={`${work_day?.monday ? "light" : "dark"}`}>
                          Du
                        </p>
                        <p
                          className={`${work_day?.tuesday ? "light" : "dark"}`}
                        >
                          Se
                        </p>
                        <p
                          className={`${
                            work_day?.wednesday ? "light" : "dark"
                          }`}
                        >
                          Chor
                        </p>
                        <p
                          className={`${work_day?.thursday ? "light" : "dark"}`}
                        >
                          Pay
                        </p>
                        <p className={`${work_day?.firday ? "light" : "dark"}`}>
                          Ju
                        </p>
                        <p
                          className={`${work_day?.saturday ? "light" : "dark"}`}
                        >
                          Sha
                        </p>
                        <p className={`${work_day?.sunday ? "light" : "dark"}`}>
                          Yak
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      <Xizmatlar />
    </>
  );
};

export default Shifoxona;
