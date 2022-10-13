import React from "react";
import styles from "./Header.module.css";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <div
      className={`container-fluid sticky-top ${styles.divMaster} ${styles.header} ${styles.black}`}
    >
      <Container className={`${styles.contenedor} d-flex`}>
        <div className={`${styles.logoSochi} ${styles.logos} col-md-4 d-inline-flex `}>
          <img src="/logo-sochi.png" alt="logo sochi" />
        </div>
        <div
          className={`${styles.logoClaro} ${styles.logos}  col-md-4 offset-4 d-inline-flex justify-content-end `}
        >
          <img src="/logo-claro-sports.png" alt="logo claro sports" />
        </div>
      </Container>
    </div>
  );
}

export default Header;
