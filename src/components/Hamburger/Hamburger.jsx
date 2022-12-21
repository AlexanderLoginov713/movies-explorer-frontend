import  {React, useEffect }from "react";
import { useLocation } from 'react-router-dom';
import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';

export default function Hamburger({ isBurgerOpened, onClickBurger }) {

  const isMobile = useMediaQuery({ query: `(max-width: 790px)` });
  const location = useLocation();

  function handleOnClickBurger() {
    onClickBurger();
  };

  useEffect(() => {
    if (!isMobile && isBurgerOpened) {
      onClickBurger();
    }
  }, [isBurgerOpened, isMobile, onClickBurger]);

  return (
    <button
      type="button"
      className={`hamburger-button hamburger-button_${isBurgerOpened ? 'on' : 'off'
        }`}
      onClick={handleOnClickBurger}
    >
      <span className={`hamburger-button_off_color_${location.pathname === '/' ? 'white' : undefined
        }`}></span>
    </button>
  );
}