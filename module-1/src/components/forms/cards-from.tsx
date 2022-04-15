import React, { FC, RefObject } from 'react';

export type UserType = {
  firstName: string;
  lastName: string;
  country: string;
  birthDate: string;
  preview: string;
  gender: string;
};
interface ICard {
  fromValues: UserType;
}

export const Cards: FC<ICard> = ({ fromValues }) => {
  const { firstName, lastName, country, birthDate, gender, preview } = fromValues;
  return (
    <li className="card">
      <img className="card-img" src={preview} alt="avatar" />
      <div className="card-description">
        <p className="first-name">Name:{firstName}</p>
        <p className="email">Surname: {lastName}</p>
        <p className="gender">Country: {country}</p>
        <p className="date">Date: {birthDate}</p>
        <p className="gender">Gender: {gender}</p>
      </div>
    </li>
  );
};
