import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger.jsx';

export default function Navigation({ loggedIn, isBurgerOpened, onClickBurger }) {

  return (
    <>
      {loggedIn ? (
        <nav className="navigation">
          <ul className="navigation__list">
            <li>
              <Link to='/signup' className='navigation__link navigation__link_landing'>
                Регистрация
              </Link>
            </li>
            <li>
              <Link to='/signin' className='navigation__link navigation__link_landing navigation__link_signin'>
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={`navigation navigation_state_${isBurgerOpened ? 'opened' : 'closed'}`} onClick={isBurgerOpened ? onClickBurger : undefined}>
          <Hamburger isBurgerOpened={isBurgerOpened} onClickBurger={onClickBurger} />
          <ul className={`navigation__list navigation__list_logged navigation__list_state_${isBurgerOpened ? 'opened' : 'closed'}`} >
            {isBurgerOpened && (
              <li className="navigation__item">
                <NavLink exact to='/' className='navigation__link'>
                  Главная
                </NavLink>
              </li>
            )}
            <li className="navigation__item">
              <NavLink to='/movies' className='navigation__link'>
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to='/saved-movies' className='navigation__link'>
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to='/profile' className='navigation__link navigation__link_type_account'>
                Аккаунт
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}