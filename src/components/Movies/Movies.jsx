import { React, useState, useContext, useEffect } from "react";
import './Movies.css';
import {
  transformMovies,
  filterMovies,
  filterShortMovies,
} from '../../utils/utils.js';
import moviesApi from '../../utils/MoviesApi.js';
import SearchForm from '../../components/Movies/SearchForm/SearchForm';
import MoviesCardList from '../../components/Movies/MoviesCardList/MoviesCardList';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Movies({ setIsLoader, setIsInfoTooltip, savedMoviesList, onLikeClick, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);

  const [shortMovies, setShortMovies] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [NotFound, setNotFound] = useState(false);
  const [isAllMovies, setIsAllMovies] = useState([]);


  function handleSetFilteredMovies(movies, userQuery, shortMoviesCheckbox) {
    const moviesList = filterMovies(movies, userQuery, shortMoviesCheckbox);
    if (moviesList.length === 0) {
      setIsInfoTooltip({
        isOpen: true,
        successful: false,
        message: 'Ничего не найдено'
      });
      setNotFound(true);
    } else {
      setNotFound(false);
    }
    setInitialMovies(moviesList);
    setFilteredMovies(
      shortMoviesCheckbox ? filterShortMovies(moviesList) : moviesList
    );
    localStorage.setItem(
      `${currentUser._id} - movies`,
      JSON.stringify(moviesList)
    );
  }

  function handleSearchSubmit(inputValue) {
    localStorage.setItem(`${currentUser._id} - movieSearch`, inputValue);
    localStorage.setItem(`${currentUser._id} - shortMovies`, shortMovies);

    if (isAllMovies.length === 0) {
      setIsLoader(true);
      moviesApi
        .getMovies()
        .then(movies => {
          setIsAllMovies(movies);
          handleSetFilteredMovies(
            transformMovies(movies),
            inputValue,
            shortMovies
          );
          localStorage.setItem(
            `${currentUser._id} - initialMovies`,
            JSON.stringify(movies)
          );
        })
        .catch(() =>
          setIsInfoTooltip({
            isOpen: true,
            successful: false,
            message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
          })
        )
        .finally(() => setIsLoader(false));
    } else {
      handleSetFilteredMovies(isAllMovies, inputValue, shortMovies);
    }
  }

  function handleShortFilms() {
    setShortMovies(!shortMovies);
    if (!shortMovies) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(`${currentUser._id} - shortMovies`, !shortMovies);
  }

  useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - shortMovies`) === 'true') {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser._id} - movies`)
      );
      setInitialMovies(movies);
      if (
        localStorage.getItem(`${currentUser._id} - shortMovies`) === 'true'
      ) {
        setFilteredMovies(filterShortMovies(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, [currentUser]);

  return (
    <main className="movies">
      <SearchForm
        handleSearchSubmit={handleSearchSubmit}
        handleShortFilms={handleShortFilms}
        shortMovies={shortMovies}
      />
      {!NotFound && (
        <MoviesCardList
          moviesList={filteredMovies}
          savedMoviesList={savedMoviesList}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      )}
    </main>
  );
}