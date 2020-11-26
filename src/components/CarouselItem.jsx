import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

import favIcon from '../assets/static/fav-icon.png';
import playIcon from '../assets/static/play-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
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
        <img
          className='carousel-item__icons'
          src={favIcon}
          height='30'
          alt='fav icon'
        />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;
