import React from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

export default function MoviesCard() {
  const location = useLocation();

  return (
    <li className="movies-card">
      <article className="movies-card__item">
        <a target="_blank" rel="noreferrer" href="#">
          <img
            className="movies-card__poster"
          />
        </a>
        <div className="movies-card__description">
          <h2 className="movies-card__title"></h2>
          {location.pathname === '/movies' && (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_saved"
            ></button>
          )}
          {location.pathname === '/saved-movies' && (
            <button
              type="button"
              className="movies-card__button movies-card__button_type_unsave"
            ></button>
          )}
        </div>
        <span className="movies-card__duration">

        </span>
      </article>
    </li>
  );
}
