import React from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import './SearchForm.css';

export default function SearchForm() {

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" name="search" noValidate >
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            required
          />
          <span className="search__error"></span>
          <button className="search__button" type="submit"></button>
        </form>
        <ToggleSwitch />
      </div>
    </section>
  )
}