import React from "react";
import { useState, useEffect } from 'react';
import useFormWithValidation from "../../../hooks/useFormValidation";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import './SearchForm.css';

export default function SearchForm({ handleSearchSubmit }) {

  const { values, handleChange, isValid } = useFormWithValidation();
  const [errorQuery, setErrorQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    isValid ? handleSearchSubmit(values.search) : setErrorQuery('Нужно ввести ключевое слово.');
  };

  useEffect(() => {
    setErrorQuery('')
  }, [isValid]);

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
            required
            value={values.search || ''}
            onChange={handleChange}
          />
          <span className="search__error">{errorQuery}</span>
          <button className="search__button" type="submit"></button>
        </form>
        <ToggleSwitch />
      </div>
    </section>
  )
}