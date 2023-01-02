import React from 'react';
import './NotFound.css';

export default function NotFound({ onClick }) {
  return (
    <main className="not-found">
      <p className="not-found__text-container">
        <span className="not-found__error">404</span>
        <span className="not-found__error-name">Страница не найдена</span>
      </p>
      <button className="not-found__button" onClick={onClick}>
        Назад
      </button>
    </main>
  );
}