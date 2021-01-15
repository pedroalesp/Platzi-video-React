import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';

import '../assets/styles/components/Login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className='register login'>
      <section className='register__container login__container'>
        <h2 tabIndex='0'>Regístrate</h2>
        <form
          onSubmit={handleSubmit}
          className='register__container--form login__container--form'
        >
          <input
            name='name'
            aria-label='Nombre'
            type='text'
            className='input'
            placeholder='Nombre'
            onChange={handleChange}
          />
          <input
            name='email'
            aria-label='Correo'
            type='text'
            className='input'
            placeholder='Correo'
            onChange={handleChange}
          />
          <input
            name='password'
            aria-label='Contraseña'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleChange}
          />
          <input
            name='confirmPassword'
            aria-label='Confirmar contraseña'
            type='password'
            className='input'
            placeholder='Confirmar contraseña'
            onChange={handleChange}
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link className='register__container--sesion' to='/login'>
          Inicia Sesión
        </Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
