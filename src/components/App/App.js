import React from 'react';
import Main from "../Main/Main";

import './app.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function app() {
  return (

    <section className="app">

      <Header />

        <Routes>
          <Route exact path='/' element={<Main />} />

          <Route exact path='/movies' element={<Movies />} />
          <Route exact path='/saved-movies' element={<SavedMovies />} />
          <Route exact path='/profile' element={<Profile />} />

        </Routes>


    </section >
  );
}

export default app;
