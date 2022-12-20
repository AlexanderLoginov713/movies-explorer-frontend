import { React, useState } from "react";
import './SavedMovies.css';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  function onClickBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  const savedMovies = [
    {
      id: 1,
      name: '33 слова о дизайне',
      link: 'https://i.ibb.co/HTv6TnB/33-words.png'
    },
    {
      id: 2,
      name: 'Киноальманах «100 лет дизайна»',
      link: 'https://i.ibb.co/nD6nmzQ/almanach.png'
    },
    {
      id: 3,
      name: 'В погоне за Бенкси',
      link: 'https://i.ibb.co/tpjGqhR/v-pogone.png'
    },
  ];

  return (
    <main className="saved-movies">
      <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} />
      <SearchForm />

      <MoviesCardList
        cards={savedMovies} />
      <Footer />

    </main>
  );
}