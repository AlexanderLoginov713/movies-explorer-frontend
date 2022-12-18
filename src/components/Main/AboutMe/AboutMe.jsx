import React from "react";
import "./AboutMe.css";
import photo from "../../../images/photo.png";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__bio-container">
          <div className="about-me__bio">
            <h3 className="about-me__name">Александр Логинов</h3>
            <p className="about-me__age">Фронтенд-разработчик, 40 лет</p>
            <p className="about-me__text">
              Мне интересна веб-разработка, потому что эта профессия предоставляет
              бесконечные возможности для профессионального роста, кроме того, здесь
              огромное количество высококачественных ресурсов для самообразования и
              большое сообщество разработчиков. В будущем я хотел бы работать в сильной
              команде, создающей необычные проекты. Я хотел бы делать красивые
              интерактивные сайты.
            </p>
            <ul className="about-me__socials">
              <li>
                <a
                  href="https://github.com/AlexanderLoginov713"
                  target="_blank"
                  rel="noreferrer"
                  className="about-me__social-link"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__photo"
            src={photo}
            alt="фотография студента-разработчика"
          />
        </div>
      </div>
    </section>
  );
}