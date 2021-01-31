import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ myList, trends, originals, searchResults }) => {
  return (
    <>
      <Search />

      {searchResults.length === 0 ? (
        <div>
          {myList.length > 0 && (
            <Categories title='My List'>
              <Carousel>
                {myList.map((item) => (
                  <CarouselItem key={item.id} {...item} isList />
                ))}
              </Carousel>
            </Categories>
          )}

          <Categories title='Trends'>
            <Carousel>
              {trends.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>

          <Categories title='Originals'>
            <Carousel>
              {originals.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>
        </div>
      ) : (
        <div>
          {searchResults.length > 0 && (
            <Categories title='Results'>
              <Carousel>
                {searchResults.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))}
              </Carousel>
            </Categories>
          )}
        </div>
      )}
    </>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
