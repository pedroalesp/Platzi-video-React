import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

import favIcon from '../assets/static/fav-icon.png';
import playIcon from '../assets/static/play-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  const handleSetfavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img
            className='carousel-item__icons'
            src={playIcon}
            height='30px'
            alt='Play icon'
          />

          {isList ? (
            <img
              onClick={() => handleDeleteFavorite(props.id)}
              className='carousel-item__icons'
              src={removeIcon}
              height='30'
              alt='remove icon'
            />
          ) : (
            <img
              onClick={handleSetfavorite}
              className='carousel-item__icons'
              src={favIcon}
              height='30'
              alt='fav icon'
            />
          )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

const mapDispatchToprops = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToprops)(CarouselItem);
