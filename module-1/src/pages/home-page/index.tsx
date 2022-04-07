import React from 'react';
import { CardList } from '../../components/card-list/cardList';
import SearchBar from '../../components/search-bar/search';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <SearchBar />
      <CardList />
    </div>
  );
};

export default HomePage;
