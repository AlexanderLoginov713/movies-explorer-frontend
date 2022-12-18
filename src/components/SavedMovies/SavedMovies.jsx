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
  return (
    <main className="saved-movies">
      <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} />
      <SearchForm />

      <MoviesCardList />
      <Footer />

    </main>
  );
}