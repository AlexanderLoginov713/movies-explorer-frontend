import React from "react";
import './SearchForm.css';
import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

export default function SearchForm({ handleSearchSubmit, handleShortFilms, shortMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

  const [errorQuery, setErrorQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSearchSubmit(values.search) : setErrorQuery('Нужно ввести ключевое слово.');
  };

  useEffect(() => {
    setErrorQuery('')
  }, [isValid]);

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem(`${currentUser._id} - movieSearch`)) {
      const searchValue = localStorage.getItem(`${currentUser._id} - movieSearch`);
      values.search = searchValue;
      setIsValid(true);
    }
  }, [currentUser]);

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" name="search" noValidate onSubmit={handleSubmit}>
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            value={values.search || ''}
            onChange={handleChange}
            required
          />
          <span className="search__error">{errorQuery}</span>
          <button className="search__button" type="submit"></button>
        </form>
        <ToggleSwitch shortMovies={shortMovies} handleShortFilms={handleShortFilms} />
      </div>
    </section>
  )
}