import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Shifokorlar = () => {
  const storedHospitals = localStorage.getItem("data");
  const doctors = JSON.parse(storedHospitals);

  console.log(doctors, "doc");

  // Hospitals data:
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  const navigate = useNavigate();
  setItems(doctors);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const singleDoctorData = (id) => {
    fetch(`https://shohjahon-sohibov.jprq.live/user/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res?.data, "doctor one");
        localStorage.setItem("doctor", JSON.stringify(res?.data));
        window.scrollTo(0, 0);
      });
    navigate("/hospitals/hospital/service/doctor");
  };

  return (
    <>
      <section className="shifo-header">
        <div className="shadow">
          <div className="container">
            <div className="shifo-header__title">
              <p>
                <span onClick={() => navigate("/")}>Home</span> /{" "}
                <span onClick={() => navigate("/hospitals")}>Shifoxonalar</span>
              </p>
              <h2>Bizning Shifoxonalar</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="shifoxonalar">
        <div className="container">
          <div className="shifoxonalar-cards">
            {items
              ?.slice(0, visible)
              ?.map(
                ({ id, first_name, last_name, speciality, phone_number }) => {
                  return (
                    <div key={id} className="shifoxonalar-card">
                      <div className="card-image">
                        <img
                          src={require("../../assets/images/doctor-1.jpg")}
                          alt="clinika"
                        />
                      </div>
                      <div className="card-description">
                        <h4>{speciality}</h4>
                        <p>
                          {first_name || "No data"} {last_name}
                        </p>
                        <p>{phone_number}</p>
                      </div>
                      <button
                        className="shifoxonalar-btn"
                        onClick={() => singleDoctorData(id)}
                      >
                        Shifoxona haqida
                      </button>
                    </div>
                  );
                }
              )}
          </div>
          <div className="length">
            <button className="btn-transparent length" onClick={showMoreItems}>
              <div className="welcome-btn">
                <p>Read More</p>
                <img
                  src={require("../../assets/icons/arrow.png")}
                  alt="arrow logo"
                />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shifokorlar;
