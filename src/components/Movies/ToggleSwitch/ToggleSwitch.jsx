import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({ shortMovies, handleShortFilms }) {
  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">Короткометражки</label>
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onChange={handleShortFilms}
        checked={shortMovies ? true : false}
      />
    </div>
  );
}
export default ToggleSwitch;