import React from 'react';
import Main from "../Main/Main";

import './app.css';
import { Route, Routes } from 'react-router-dom';

import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';

function app() {
  return (

    <section className="app">

      <Routes>
         <Route exact path='/' element={<Main />} />
         <Route exact path='/signup' element={<Register />} />
         <Route exact path='/signin' element={<Login />} />


        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/saved-movies' element={<SavedMovies />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />


      </Routes>


    </section >
  );
}

export default app;
