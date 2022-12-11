import React from "react";
import "./Promo.css";
import logo from '../../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__about-project">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__description">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="promo__link"
          >
            Узнать больше
          </a>
        </div>
        <img
          src={logo}
          alt="Логотип Земля"
          className="promo__logo" />
      </div>
    </section>
  );
}

export default Promo;