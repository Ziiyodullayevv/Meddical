import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { hospital } from "../../mock/mock";
import "./style.css";

const Carousel = () => {
  let settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 10px 10px rgba(0, 0, 0, 0.189)",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    console.log(props);
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          zIndex: "4",
          color: "red !important",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 10px 10px rgba(0, 0, 0, 0.189)",
        }}
        onClick={onClick}
      />
    );
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(hospital);
  }, []);

  return (
    <section className="carosel">
      <div className="container">
        <div className="carousel-title">
          <h4 className="global-subtitle">WELCOME TO MEDDICAL</h4>
          <h2 className="global-title">A Great Place to Receive Care</h2>
        </div>
        <Slider {...settings}>
          {items.slice(0, 6).map((value) => {
            return (
              <div key={value?.id} className="shifoxonalar-card carousel">
                <div className="card-image">
                  <img src={value?.image} alt="clinic" />
                </div>
                <div className="card-description">
                  <h4>{value.name}</h4>
                  <p>{value?.address}</p>
                  <p>{value?.callCenter}</p>
                </div>
                <button className="shifoxonalar-btn">Ko'proq Ko'rish</button>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
