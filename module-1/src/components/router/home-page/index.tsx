import React from 'react';
import { CardList } from '../../card-list/Card-list';
import SearchBar from '../../search-bar/search';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <SearchBar />
      <CardList />
    </div>
  );
};

export default HomePage;
