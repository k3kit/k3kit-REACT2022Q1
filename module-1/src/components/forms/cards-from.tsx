import React, { FC, RefObject } from 'react';

export type UserType = {
  data: {
    firstName?: string;
    lastName?: string;
    country?: string;
    birthDate?: string;
    gender?: string;
    agree?: boolean;
  };
  preview?: string;
};
interface ICard {
  fromValues: UserType;
}

export const Cards: FC<ICard> = ({ fromValues }) => {
  const { data, preview } = fromValues;
  return (
    <div className="card">
      <img className="card-img" src={preview} alt="avatar" />
      <div className="card-description">
        <p className="first-name">Name: {data.firstName}</p>
        <p className="email">Surname: {data.lastName}</p>
        <p>
          Place and date of birth: {data.country} - {data.birthDate?.toString()}
        </p>
        <p className="gender">Gender: {data.gender ? 'male' : 'female'}</p>
      </div>
    </div>
  );
};
