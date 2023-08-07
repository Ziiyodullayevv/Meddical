import React, { useState } from "react";
import Modalka from "../modalka";
import "./style.css";

const doctorData = localStorage.getItem("doctor");
const doctor = JSON.parse(doctorData);

const Doctors = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <section className="doctors">
        <div className="container">
          <div className="doctorWrap">
            <img src={require("../../assets/images/about-image.png")} alt="" />
            <div className="rightDoctor">
              <h2>Shifokor</h2>
              <div className="doctorDetails">
                <div className="answer">
                  <h4>Shifokor</h4>
                  <h4>Mutahasislik</h4>
                  <h4>Ish Vaqti</h4>
                  <h4>Etaj</h4>
                  <h4>Mijozlar Soni</h4>
                  <h4>Xozir</h4>
                  <h4>5 - mijoz</h4>
                </div>
                <div className="answer">
                  <p>
                    <b>
                      {doctor?.first_name || "No data"}{" "}
                      {doctor?.last_name || "No data"}{" "}
                    </b>
                  </p>
                  <p>
                    <b>{doctor?.speciality}</b>
                  </p>
                  <p>
                    <b>
                      {doctor?.farstNam
                        ? "09 : 00 - 18 : 00"
                        : "18 : 00 - 04 : 00"}
                    </b>
                  </p>
                  <p>{doctor?.floor}</p>
                  <p>
                    <b>{doctor?.room_floor}</b>
                  </p>
                  <p>
                    <b></b>
                  </p>
                  <p>
                    <b>: 32 daqiqa</b>
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Navbat Olish
              </button>
            </div>
          </div>
        </div>
      </section>
      {display && <Modalka />}
    </div>
  );
};

export default Doctors;
