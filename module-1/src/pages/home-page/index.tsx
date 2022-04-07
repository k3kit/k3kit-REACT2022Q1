import React from 'react';
import { CardList } from '../../components/card-list/cardList';
import SearchBar from '../../components/search-bar/search';

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <CardList />
    </>
  );
};

export default HomePage;
