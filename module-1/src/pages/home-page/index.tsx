import React from 'react';
import { CardList } from '../../components/card-list/cardList';
import FormPage from '../form-page';

const HomePage = () => {
  return (
    <div data-testid="home-page">
      <CardList />
    </div>
  );
};

export default HomePage;
