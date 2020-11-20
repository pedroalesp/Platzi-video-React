import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

import favIcon from '../assets/static/fav-icon.png';
import playIcon from '../assets/static/play-icon.png';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/1628235/pexels-photo-1628235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      alt='Phone'
    />
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
      <p className='carousel-item__details--title'>Título Descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 min</p>
    </div>
  </div>
);

export default CarouselItem;
