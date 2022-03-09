import React from 'react';
import { CardList } from '../../card-list/Card-list';
import SearchBar from '../../search-bar/search';

const HomePage = () => {
  return (
    <>
      <SearchBar />
      <CardList />
    </>
  );
};

export default HomePage;
