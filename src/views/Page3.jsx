import React from "react";

import cheemsb from "../assets/images/cheemsb.webp";
import cheemss from "../assets/images/cheemss.webp";

function Page3() {
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
        Ahortia estoy algo nerviosito,
      </h2>
      <h2 style={{ fontWeight: "300", lineHeight: "2rem" }}>
        porque hay algo muy importante que quiero decirte,
      </h2>
      <h2 style={{ fontWeight: "300", lineHeight: "2rem" }}>
        pero para eso tienes que pasar el jueguito
      </h2>
      <div>
        <img
          style={{ width: "100px", transform: "scaleX(-1)" }}
          src={cheemsb}
          alt=""
        />
        <img style={{ width: "100px" }} src={cheemss} alt="" />
      </div>
    </div>
  );
}

export default Page3;
