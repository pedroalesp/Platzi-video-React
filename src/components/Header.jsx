/* eslint-disable quotes */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';

import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';

import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img
          className='header__img'
          src='https://raw.githubusercontent.com/platzi/PlatziVideo/feature/react/src/assets/static/logo-platzi-video-BW2.png'
          alt='logo'
        />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt='User' />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <a onClick={handleLogout} href='#logout'>
                Cerrar Sesión
              </a>
            </li>
          ) : (
            <li>
              <Link to='/login'>Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
