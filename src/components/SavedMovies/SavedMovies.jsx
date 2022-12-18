import React from "react";
import './SavedMovies.css';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function SavedMovies() {
  return (
    <main className="saved-movies">
      <Header />
      <SearchForm />

      <MoviesCardList />
      <Footer />

    </main>
  );
}