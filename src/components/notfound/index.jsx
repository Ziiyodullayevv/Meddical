import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ maxWidth: "700px" }}
        src={require("../../assets/images/404-error.png")}
        alt="notfound"
      />
    </div>
  );
};

export default NotFound;
