/* eslint-disable quotes */
import React from 'react';

const Header = () => (
  <header className='header'>
    <img
      className='header__img'
      src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png'
      alt='logo'
    />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src='./icons/user-icon.png' alt='User' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
