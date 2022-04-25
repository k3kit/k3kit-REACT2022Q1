import React, { FC, useState } from 'react';
import './style.css';
export interface Icharacter {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin: {
    name?: string;
    url?: string;
  };
  location: {
    name?: string;
    url?: string;
  };
  image?: string;
  episode?: [];
  url?: string;
  created?: string;
}
export interface prop {
  char: Icharacter;
}

export const CardItem: FC<prop> = ({ char }) => {
  return (
    <>
      <li className="card" key={char.id}>
        <img className="card-img" src={`${char.image}`} alt="avatar" />
        <div className="card-description">
          <h3>Name: {char.name}</h3>
          <p>Status: {char.status}</p>
          <p>Species: {char.species}</p>
        </div>
      </li>
    </>
  );
};
