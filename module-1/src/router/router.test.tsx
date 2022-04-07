import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('test router', () => {
  test('router test', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homeLink = screen.getByTestId('link-home');
    const aboutLink = screen.getByTestId('link-about');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
    userEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});

describe('test router', () => {
  test('router 404 test', () => {
    render(
      <MemoryRouter initialEntries={['/asdd']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-notfound')).toBeInTheDocument();
  });
});
