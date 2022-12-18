import React from "react";
import './Techs.css';

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container" >
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__main">7 технологий</h3>
        <p className="techs__article">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-item">
            <p className="techs__list-name">HTML</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-name">CSS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-name">JS</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-name">React</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-name">Git</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-name">Express.js</p>
          </li>
          <li className="techs__list-item">
            <p className="techs__list-name">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
}