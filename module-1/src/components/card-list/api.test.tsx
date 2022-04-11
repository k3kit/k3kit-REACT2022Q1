import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardList } from './cardList';

test('Renders a list of users', async () => {
  render(<CardList />);
  const text = await screen.findByText('Rick Sanchez');
  expect(text).toBeInTheDocument();
  screen.debug();
});
