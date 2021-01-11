import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({ email: '' });

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login register'>
      <section className='login__container register__container'>
        <h2 tabIndex='0'>Inicia Sesión</h2>
        <form
          onSubmit={handleSubmit}
          className='login__container--form register__container--form'
        >
          <input
            name='email'
            onChange={handleChange}
            aria-label='Correo'
            type='text'
            className='input'
            placeholder='Correo'
          />
          <input
            name='password'
            onChange={handleChange}
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
          ¿No tienes ninguna cuenta? <Link to='/register'>Registrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
