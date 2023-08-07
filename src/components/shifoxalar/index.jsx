import React, { useEffect, useState } from "react";
import "./style.css";
import MiniCard from "../minicontact";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const Shifoxonalar = () => {
  // Hospitals data:
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(6);

  const navigate = useNavigate();

  // hospitals data:
  useEffect(() => {
    fetch("https://shohjahon-sohibov.jprq.live/hospital?limit=10&offset=0")
      .then((response) => response.json())
      .then((result) =>
        setItems(
          result?.data?.hospital || [],
          console.log(result.data.hospital)
        )
      )
      .catch((error) => console.log("error", error));
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  // Hospital data:
  const [hospitals, setHospitals] = useState([]);
  const [service, setService] = useState([]);
  console.log(hospitals, service);

  const fetchHospitals = async (clinikaId) => {
    try {
      const params = {
        limit: 10,
        offset: 0,
        role: "doctor",
        clinic_id: clinikaId,
      };
      if (clinikaId) {
        params.clinikaId = clinikaId;
      }
      const response = await axios.get(
        "https://shohjahon-sohibov.jprq.live/user",
        {
          params,
          paramsSerializer: (params) => {
            return qs.stringify(params);
          },
        }
      );

      // setHospitals o'zgaruvchisini o'zgartiringiz
      setHospitals(
        console.log(response.data.data.users, "shefo"),
        localStorage.setItem(
          "hospitals",
          JSON.stringify(response?.data.data.users)
        )
      );
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
  };

  // data:

  const fetchService = async (clinikaId) => {
    try {
      const params = {
        limit: 10,
        offset: 0,
        role: "doctor",
        clinic_id: clinikaId,
      };
      if (clinikaId) {
        params.clinikaId = clinikaId;
      }
      const response = await axios.get(
        "https://shohjahon-sohibov.jprq.live/service",
        {
          params,
          paramsSerializer: (params) => {
            return qs.stringify(params);
          },
        }
      );

      // setHospitals o'zgaruvchisini o'zgartiringiz
      setService(
        console.log(response.data.data.service, "service"),
        localStorage.setItem(
          "services",
          JSON.stringify(response?.data.data.service)
        )
      );
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
    navigate("hospital");
  };

  return (
    <>
      <section className="shifo-header">
        <div className="shadow">
          <div className="container">
            <div className="shifo-header__title">
              <p>
                <span>Home</span> / <span>Shifoxonalar</span>
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
              .slice(0, visible)
              .map(({ id, name, address, image_url, call_center }) => {
                return (
                  <div key={id} className="shifoxonalar-card">
                    <div className="card-image">
                      <img
                        src={require("../../assets/images/doctor-1.jpg")}
                        alt="clinika"
                      />
                    </div>
                    <div className="card-description">
                      <h4>{name}</h4>
                      <p>{address}</p>
                      <p>{call_center}</p>
                    </div>
                    <button
                      className="shifoxonalar-btn"
                      onClick={() => {
                        fetchHospitals(id);
                        fetchService(id);
                      }}
                    >
                      Shifoxona haqida
                    </button>
                  </div>
                );
              })}
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
      <MiniCard />
    </>
  );
};

export default Shifoxonalar;
