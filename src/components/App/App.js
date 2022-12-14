import React from 'react';
import Main from "../Main/Main";
import Header from '../Header/Header';
import Movies from '../Movies/Movies.jsx';
import Footer from '../Footer/Footer';
import './app.css';
import { Route, Routes } from 'react-router-dom';

function app() {
  return (

    <section className="app">

      <Header />

        <Routes>
          <Route exact path='/' element={<Main />} />

          <Route exact path='/movies' element={<Movies />} />

          <Route exact path='/' element={<Footer />} />
          <Route exact path='/movies' element={<Footer />} />
          <Route exact path='/saved-movies' element={<Footer />} />

        </Routes>

      <Footer />
    </section >
  );
}

export default app;
