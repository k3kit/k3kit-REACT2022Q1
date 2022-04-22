/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, RefObject } from 'react';

export type UserType = {
  firstName?: string;
  lastName?: string;
  country?: string;
  birthDate?: string;
  gender?: string;
  agree?: boolean;
  file: any | undefined;
};
interface ICard {
  fromValues: UserType;
}

export const Cards: FC<ICard> = ({ fromValues }) => {
  const { firstName, lastName, country, birthDate, gender, file } = fromValues;
  return (
    <div className="card">
      <img className="card-img" src={URL.createObjectURL(new Blob([file[0]]))} alt="avatar" />
      <div className="card-description">
        <p className="first-name">Name: {firstName}</p>
        <p className="email">Surname: {lastName}</p>
        <p>
          Place and date of birth: {country} - {birthDate?.toString()}
        </p>
        <p className="gender">Gender: {gender ? 'male' : 'female'}</p>
      </div>
    </div>
  );
};
