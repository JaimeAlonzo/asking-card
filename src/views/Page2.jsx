import React from "react";

import michi from "../assets/images/michi.webp";

function Page2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: "100%",
        padding: "30px",
      }}
    >
      <h2 style={{ fontWeight: "300", lineHeight: "2rem" }}>
        Hoy pase un dia increible contigo, lleno de muchas sonrisas y diversión,
      </h2>
      <h2 style={{ fontWeight: "300", lineHeight: "2rem" }}>
        Deveras contigo se que siento una fuerte conexión,
      </h2>
      <h2 style={{ fontWeight: "300", lineHeight: "2rem" }}>
        Estoy muy seguro de que contigo podria pasar muchos dias llenos de
        emoción
      </h2>
      <img style={{width:"150px"}} src={michi} alt="" />
    </div>
  );
}

export default Page2;
