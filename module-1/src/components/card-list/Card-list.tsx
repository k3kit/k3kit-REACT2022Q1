import React from 'react';
import data from '../card/data';
import Card from '../card/Card';
import './style.css';

export const CardList = (): JSX.Element => {
  return (
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
};
