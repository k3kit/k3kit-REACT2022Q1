import { render, screen } from '@testing-library/react';
import Card from './Card';
import data from '../card/data';
describe('Card component', () => {
  it('Cards renders', () => {
    render(
      <ul className="card-item">
        {data.map((el) => {
          return (
            <Card
              key={el.id}
              avatar={el.avatar}
              first_name={el.first_name}
              gender={el.gender}
              email={el.email}
            />
          );
        })}
      </ul>
    );
    expect(screen.getByText(/Ignaz/)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
