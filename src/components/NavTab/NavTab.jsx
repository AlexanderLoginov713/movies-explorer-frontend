import React from 'react';
import './NavTab.css';
import { HashLink as Link } from 'react-router-hash-link';

export default function NavTab() {
  return (
    <nav className="nav-tab">
      <Link to="#about-project" className="nav-tab__link">О проекте</Link>
      <Link to="#techs" className="nav-tab__link">Технологии</Link>
      <Link to="#about-me" className="nav-tab__link">Студент</Link>
    </nav>
  );
}