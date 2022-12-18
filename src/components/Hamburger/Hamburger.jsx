import  {React, useEffect }from "react";
import './Hamburger.css';
import { useMediaQuery } from 'react-responsive';

export default function Hamburger({ isBurgerOpened, onClickBurger }) {

  const isMobile = useMediaQuery({ query: `(max-width: 790px)` });

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
      <span></span>
    </button>
  );
}