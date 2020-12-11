import React from 'react';

import '../assets/styles/components/Login.scss';

const Register = () => (
  <section className='register login'>
    <section className='register__container login__container'>
      <h2 tabIndex='0'>Regístrate</h2>
      <form className='register__container--form login__container--form'>
        <input
          aria-label='Nombre'
          type='text'
          className='input'
          placeholder='Nombre'
        />
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
        <input
          aria-label='Confirmar contraseña'
          type='password'
          className='input'
          placeholder='Confirmar contraseña'
        />
        <button className='button'>Registrarme</button>
      </form>
      <a className='register__container--sesion' href='/'>
        Inicia Sesión
      </a>
    </section>
  </section>
);

export default Register;
