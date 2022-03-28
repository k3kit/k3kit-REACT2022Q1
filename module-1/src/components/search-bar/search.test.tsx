import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

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
describe('App', () => {
  it('reder', () => {
    render(<SearchBar />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByDisplayValue('null')).toBeInTheDocument();
  });
});

describe('App', () => {
  it('reder', () => {
    render(<SearchBar />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'React' },
    });
    expect(screen.getByDisplayValue('React')).toBeInTheDocument();
  });
});

describe('test local storage', () => {
  test('router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('link-home');
    const aboutLink = screen.getByTestId('link-about');
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'storage' },
    });
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
    expect(screen.getByDisplayValue('storage')).toBeInTheDocument();
  });
});
