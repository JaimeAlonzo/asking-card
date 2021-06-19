import React, { useState } from "react";

import { Button } from "@material-ui/core";

import froggy from "../assets/images/froggy.webp";
import sad from "../assets/images/sad.webp";
import happy from "../assets/images/happy.webp";

function Question() {
  const [response, setResponse] = useState("");

  return (
    <div>
      {response === "" && (
        <div>
          <img
            style={{ width: "200px", marginBottom: "3rem" }}
            src={froggy}
            alt=""
          />
          <div>
            <Button
              onClick={() => {
                setResponse("no");
              }}
              size="large"
              variant="contained"
            >
              NO 😔
            </Button>
            <Button
              size="large"
              onClick={() => {
                setResponse("yes");
              }}
              style={{ marginLeft: "30px" }}
              variant="contained"
            >
              SI 🤩
            </Button>
          </div>
        </div>
      )}
      {response === "yes" && (
        <div>
          <img style={{ width: "200px" }} src={happy} alt="" />
          <h1>Prometo hacerte el novio mas feliz de la vida!</h1>
        </div>
      )}
      {response === "no" && (
        <div>
          <h1>ESTA BIEM</h1>
          <img style={{ width: "200px" }} src={sad} alt="" />
          <br />
          <br />
          <br />
          <Button
            size="large"
            onClick={() => {
              setResponse("");
            }}
            style={{ marginLeft: "30px" }}
            variant="contained"
          >
            Reconsiderar 🥺
          </Button>
        </div>
      )}
    </div>
  );
}

export default Question;
