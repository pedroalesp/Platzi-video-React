import React from 'react';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
  <section className='login register'>
    <section className='login__container register__container'>
      <h2 tabindex='0'>Inicia Sesión</h2>
      <form className='login__container--form register__container--form'>
        <input
          aria-label='Correo'
          type='text'
          className='input'
          placeholder='Correo'
        />
        <input
          aria-label='Contraseña'
          type='password'
          className='input'
          placeholder='Contraseña'
        />
        <button className='button'>Iniciar Sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input
              aria-label='Recuerdame'
              type='checkbox'
              id='cbox1'
              value='checkbox'
            />
            Recuerdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='google' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='twitter' />
          Inicia sesión con twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta <a href='/'>Registrate</a>
      </p>
    </section>
  </section>
);
export default Login;
