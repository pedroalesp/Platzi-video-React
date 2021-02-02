import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const handleSearch = (itemQuery) => {
    return props.searchItems(itemQuery);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>

      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className='input-search'
        type='text'
        placeholder='Buscar...'
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchItems,
};

export default connect(null, mapDispatchToProps)(Search);
