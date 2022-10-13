import React from "react";
import styles from "./Footer.module.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div
      className={`container-fluid ${styles.divMaster} ${styles.header} ${styles.black}`}
    >
      <Container className={`${styles.fila} d-flex`}>
        <div
          className={`${styles.logoSochi} col-sm-12 col-md-4 d-inline-flex justify-content-start align-items-center`}
        >
          <p className="text-white">Aviso de privacidad / Contacto</p>
        </div>
        <div className={`${styles.logos} col-sm-12 col-md-4 d-inline-flex justify-content-center`}>
          <img src="/logo-sochi.png" alt="logo sochi" />
        </div>
        <div
          className={`${styles.logos} ${styles.iconos} col-sm-12 col-md-4 d-inline-flex justify-content-end align-items-center`}
        > 
          <a href="https://en.wikipedia.org/wiki/Mobli" target="_blank" rel="noreferrer">
            <img className={`${styles.icono}`} src="/mobli-icon.png" alt="mobli icon" />
          </a>
          <a href="https://twitter.com/ClaroSports" target="_blank" rel="noreferrer">
            <img className={`${styles.iconoTw}`} src="/logo-twitter.webp" alt="mobli icon" />
          </a>
          <a href="https://www.facebook.com/clarosports/" target="_blank" rel="noreferrer">
            <img className={`${styles.iconoFb}`} src="/logo-fb.png" alt="mobli icon" />
          </a>
          <a href="https://www.instagram.com/marcaclaro/" target="_blank" rel="noreferrer">
            <img className={`${styles.iconoIg}`} src="/logo-ig.png" alt="mobli icon" />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
