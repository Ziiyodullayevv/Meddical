import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router";
import axios from "axios";
import qs from "qs"; //

const Xizmatlar = () => {
  const storedHospitals = localStorage.getItem("services");
  const services = JSON.parse(storedHospitals);

  const [service, setService] = useState([]);
  const [data, setData] = useState([]);

  console.log(data, "doc");

  useEffect(() => {
    setService(services);
  }, []);

  // data :

  const fetchHospitals = async (id, clinic_id) => {
    try {
      const params = {
        limit: 10,
        offset: 0,
        role: "doctor",
        service_id: id,
        clinic_id: clinic_id,
      };
      if (clinic_id && id) {
        params.clinic_id = clinic_id;
        params.service_id = id;
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
      setData(
        console.log(response.data?.data?.users, "id"),
        localStorage.setItem(
          "data",
          JSON.stringify(response?.data?.data?.users)
        )
      );
    } catch (error) {
      console.error("Error fetching hospitals:", error);
    }
    // navigate("");
  };

  const navigate = useNavigate();

  return (
    <section className="xizmatlar">
      <div className="container">
        <div className="doctors-title">
          <div className="global-subtitle">Umar forsiy</div>
          <div className="global-title top-20">Bizning Shifokorlarimiz</div>
        </div>

        <div className="xizmatlar-cards">
          {service?.map(({ id, clinic_id, name: jobs, price }) => (
            <div key={id} onClick={() => fetchHospitals(id, clinic_id)}>
              <div
                onClick={() => navigate("/hospitals/hospital/service")}
                key={id}
                className="xizmatlar-card"
              >
                <img
                  src={require("../../assets/icons/Vector.png")}
                  alt="icon"
                />
                <p>{jobs || "No data"}</p>
                <p>{price || 0} so'm</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Xizmatlar;
