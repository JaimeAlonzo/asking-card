import React from "react";

import cheems from "../assets/images/cheems.webp";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height:"80%"
      }}
    >
      <h1>Limdo,</h1>
      <h2>Quizas no sea mucho pero espero te guste esto.</h2>
      <img style={{ width: "200px" }} src={cheems} alt="" />
    </div>
  );
}

export default Home;
