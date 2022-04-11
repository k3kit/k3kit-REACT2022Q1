import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { CardList } from '../card-list/cardList';

test('test', () => {
  const { getByTestId, getByText } = render(<CardList />);
  const nameInput = getByTestId('input');

  fireEvent.change(nameInput, { target: { value: 'Albert Einstein' } });
  fireEvent.click(getByTestId('btn-s'));

  const text = getByText('Albert Einstein');
  expect(text).toBeInTheDocument();
});
