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
  test('list snapshot', () => {
    const list = render(<CardList />);
    expect(list).toMatchSnapshot();
  });
});

describe('test ', () => {
  test(' one card test', () => {
    render(
      <Card
        avatar={'https://robohash.org/culpamagnameius.png?size=50x50&set=set1'}
        first_name={'abc'}
        email={'mail'}
        gender={'gen'}
      />
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/abc/)).toBeInTheDocument();
    expect(screen.getByText(/mail/)).toBeInTheDocument();
    expect(screen.getByText(/gen/)).toBeInTheDocument();
    screen.debug();
  });
});
