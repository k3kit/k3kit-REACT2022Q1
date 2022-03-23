import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './search';
import SearchButton from './search-button';

describe('Searh component', () => {
  it('renders  search component', () => {
    render(<SearchBar />);
    expect(screen.getByText('Search:')).toBeInTheDocument();
  });
  it('renders PlaceholderText', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});

describe('search button', () => {
  it('renders  search-btn component', () => {
    render(<SearchButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
