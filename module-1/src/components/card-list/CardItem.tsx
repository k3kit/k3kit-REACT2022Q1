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
  const [modal, setModal] = useState(true);
  let popup;
  if (modal === false) {
    popup = (
      <div className="popup" onClick={() => setModal(true)}>
        <div className="popup_inner" onClick={(e) => e.stopPropagation()}>
          <img className="card-img-popup" src={`${char.image}`} alt="avatar" />
          <div className="card-description-popup">
            <h3>Name: {char.name}</h3>
            <p>Status: {char.status}</p>
            <p>Species: {char.species}</p>
            <p>Gender: {char.gender}</p>
            <p>Created: {char.created}</p>
            <p>Origin: {char.origin.name}</p>
            <p>Location: {char.location.name}</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <li className="card" key={char.id} onClick={() => setModal(false)}>
        <img className="card-img" src={`${char.image}`} alt="avatar" />
        <div className="card-description">
          <h3>Name: {char.name}</h3>
          <p>Status: {char.status}</p>
          <p>Species: {char.species}</p>
        </div>
      </li>
      {popup}
    </>
  );
};
