import React from 'react';

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ cards }) {


  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {cards.map((movie) => (
          <MoviesCard
            key={movie.id}
            card={movie}
          />
        ))}
      </ul>
      <button
        className="movies-card-list__show-more"
      >
        Ещё
      </button>
    </section>
  );
}


