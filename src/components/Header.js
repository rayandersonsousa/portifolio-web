import React from 'react';
import '../css/Header.css';

function Header() {
  return(
    <header>
      <ul className='headerList'>
        <li>Home</li>
        <li>Sobre Mim</li>
        <li>Projetos</li>
        <li>Skills</li>
      </ul>
    </header>
  )
}

export default Header;