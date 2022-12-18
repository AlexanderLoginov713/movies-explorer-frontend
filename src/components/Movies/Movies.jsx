import { React, useState } from "react";
import './Movies.css';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  function onClickBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }
  return (
    <main className="movies">
      <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </main>
  );
}