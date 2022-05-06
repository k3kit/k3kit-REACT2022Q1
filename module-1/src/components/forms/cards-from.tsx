/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, RefObject } from 'react';

export type UserType = {
  firstName?: string;
  lastName?: string;
  country?: string;
  birthDate?: string;
  gender?: string;
  agree?: boolean;
  file: string;
};
interface ICard {
  item: any;
}

export const Cards: FC<ICard> = ({ item }) => {
  return (
    <div className="card-form">
      <img className="card-img" src={URL.createObjectURL(new Blob([item.file[0]]))} alt="avatar" />
      <div className="card-description">
        <p className="first-name">Name: {item.firstName}</p>
        <p className="email">Surname: {item.lastName}</p>
        <p>
          Place and date of birth: {item.country} - {item.birthDate?.toString()}
        </p>
        <p className="gender">Gender: {item.gender ? 'male' : 'female'}</p>
      </div>
    </div>
  );
};
