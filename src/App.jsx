import React, { useState } from "react";

import styles from "./App.module.scss";

import { Button } from "@material-ui/core";

import Home from "./views/Home";
import Page2 from "./views/Page2";
import Page3 from "./views/Page3";
import Simon from "./views/Simon";
import Question from "./views/Question";

function App() {
  const [page, setPage] = useState(1);
  const [won, setWon] = useState(false);

  const pages = {
    1: <Home />,
    2: <Page2 />,
    3: <Page3 />,
    4: <Simon won={won} setWon={setWon} />,
    5: <Question />,
  };

  return (
    <div className={styles.layout}>
      <div className={styles.main}>{pages[page]}</div>
      {page !== 5 && (
        <div className={styles.footer}>
          <div className={styles.btn}>
            {page > 1 && (
              <Button
                style={{ height: "100%" }}
                fullWidth
                variant="contained"
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                Atras
              </Button>
            )}
          </div>
          <div className={styles.btn}>
            <Button
              style={{ height: "100%" }}
              fullWidth
              variant="contained"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
