import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import logo from '../../images/logo.svg';

function Header() {
  const location = useLocation();

  return (
    <header
      className={`header header_theme_${
        location.pathname === '/' ? 'dark' : 'bright'
      }`}
    >
      <div className="header__container">
        <Link to='/' className='header__link'>
          <img src={logo} alt="Логотип" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;