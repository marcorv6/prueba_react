import React from "react";
import styles from "./Videos.module.css";

function Videos({ handleChangeActiveUrl, active = 0 }) {
  return (
    <div className="container row">
      <div className="col-12 text-center my-5">
        <h2 className={styles.claroText}>CLARO SPORTS EN SOCHI 2014</h2>
      </div>
      <div className="col-sm-6 col-md-3 mb-5 text-center">
        {active === 0 ? (
          <div className={`${styles.active} ${styles.videoCircle} mb-2`}>
            TEXTO RANDOM 1
          </div>
        ) : (
          <div
            onClick={() => handleChangeActiveUrl(0)}
            className={`${styles.videoCircle1} ${styles.videoCircle} mb-2 `}
          ></div>
        )}
        <span>TEAM LATAM</span>
      </div>
      <div className="col-sm-6 col-md-3 mb-5 text-center">
        {active === 1 ? (
          <div className={`${styles.active} ${styles.videoCircle} mb-2`}>
            TEXTO RANDOM 2
          </div>
        ) : (
          <div
            onClick={() => handleChangeActiveUrl(1)}
            className={`${styles.videoCircle2} ${styles.videoCircle} mb-2 `}
          ></div>
        )}
        <span>TRAVEL MEETS FASHION</span>
      </div>
      <div className="col-sm-6 col-md-3 mb-5 text-center">
        {active === 2 ? (
          <div className={`${styles.active} ${styles.videoCircle} mb-2`}>
            TEXTO RANDOM 3
          </div>
        ) : (
          <div
            onClick={() => handleChangeActiveUrl(2)}
            className={`${styles.videoCircle3} ${styles.videoCircle} mb-2 `}
          ></div>
        )}
        <span>VELOCIDAD Y RIESGO</span>
      </div>
      <div className="col-sm-6 col-md-3 mb-5 text-center">
        {active === 3 ? (
          <div className={`${styles.active} ${styles.videoCircle} mb-2`}>
            TEXTO RANDOM 4
          </div>
        ) : (
          <div
            onClick={() => handleChangeActiveUrl(3)}
            className={`${styles.videoCircle4} ${styles.videoCircle} mb-2 `}
          ></div>
        )}
        <span>EXPERIENCIA MULTIMEDIA</span>
      </div>
    </div>
  );
}

export default Videos;
