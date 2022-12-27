import { React, useState } from "react";
import './Movies.css';

import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies() {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  function onClickBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  const initialMovies = [
    {
      id: 1,
      name: '33 слова о дизайне',
      link: 'https://i.ibb.co/HTv6TnB/33-words.png'
    },
    {
      id: 2,
      name: 'Киноальманах «100 лет дизайна»',
      link: 'https://i.ibb.co/nD6nmzQ/almanach.png'
    },
    {
      id: 3,
      name: 'В погоне за Бенкси',
      link: 'https://i.ibb.co/tpjGqhR/v-pogone.png'
    },
    {
      id: 4,
      name: 'Баския: Взрыв реальности',
      link: 'https://i.ibb.co/GMvMv1z/baskia.png'
    },
    {
      id: 5,
      name: 'Бег это свобода',
      link: 'https://i.ibb.co/Hn9tN3g/beg.png'

    },
    {
      id: 6,
      name: 'Книготорговцы',
      link: 'https://i.ibb.co/QFwmCYw/kinotorgovtsy.png'
    },
    {
      id: 7,
      name: 'Когда я думаю о Германии ночью',
      link: 'https://i.ibb.co/qJCtDcv/kogda-ya.png'
    },

    {
      id: 8,
      name: 'Gimme Danger: История Игги и The Stooge...',
      link: 'https://i.ibb.co/1mp635M/gimmie.png'
    },

    {
      id: 9,
      name: 'Дженис: Маленькая девочка грустит',
      link: 'https://i.ibb.co/r0dY5HK/jhennys.png'
    },

    {
      id: 10,
      name: 'Соберись перед прыжком',
      link: 'https://i.ibb.co/7WfMQGy/soberis.png'
    },

    {
      id: 11,
      name: 'Пи Джей Харви: A dog called money',
      link: 'https://i.ibb.co/SRWYGsS/pj-harvey.png'
    },

    {
      id: 12,
      name: 'По волнам: Искусство звука в кино',
      link: 'https://i.ibb.co/4SV9Nvz/po-volnam.png'
    }];

  return (
    <main className="movies">
      <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} />
      <SearchForm />
      <MoviesCardList
        cards={initialMovies}
      />
      <Footer />
    </main>
  );
}