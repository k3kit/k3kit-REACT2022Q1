import { render, screen } from '@testing-library/react';
import Card from './Card';
import { CardList } from '../card-list/Card-list';
import data from './data';

describe('test ', () => {
  test(' all card test', () => {
    render(<CardList />);
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(data.length);
  });
});

describe('test ', () => {
  test(' one card test', () => {
    render(<CardList />);
    expect(screen.getByText(/Ignaz/)).toBeInTheDocument();
    expect(screen.getByText(/ibrasted0@arizona.edu/)).toBeInTheDocument();
  });
});
