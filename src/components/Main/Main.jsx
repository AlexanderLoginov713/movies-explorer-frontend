import { React, useState } from "react";
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Main() {

  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  function onClickBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }
  return (
    <main className="main">
      <Header onClickBurger={onClickBurger} isBurgerOpened={isBurgerOpened} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}