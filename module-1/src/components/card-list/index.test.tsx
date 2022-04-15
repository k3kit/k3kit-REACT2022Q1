import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { CardList } from './cardList';
// describe('test api', () => {
//   test('a', async () => {
//     render(<CardList />);
//     fireEvent.change(screen.getByTestId('input'), {
//       target: { value: 'Albert Einstein' },
//     });
//     const btn = screen.getByTestId('form');
//     fireEvent.submit(btn);
//     const text = screen.getByText(/Albert Einstein/i);

//     expect(text).toBeInTheDocument();
//   });
// });
