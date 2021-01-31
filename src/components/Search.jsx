import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchItems } from '../actions';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const [query, setQuery] = useState('');
  const combinedStates = props.originals.concat(props.myList, props.trends);

  const handleSearch = (itemQuery) => {
    const filteredQuerys = combinedStates.filter((item) => {
      return item.title.toLowerCase().includes(itemQuery.toLowerCase());
    });
    console.log(filteredQuerys);
    props.searchItems({
      [filteredQuerys]: filteredQuerys,
    });
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(query);
        }}
        className='input-search'
        type='text'
        placeholder='Buscar...'
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

const mapDispatchToProps = {
  searchItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
