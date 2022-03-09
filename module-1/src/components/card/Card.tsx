import React, { FC } from 'react';
import './style.css';
interface Icard {
  id?: number;
  avatar: string;
  first_name: string;
  email: string;
  gender: string;
}

const Card: FC<Icard> = ({ avatar, first_name, email, gender }: Icard) => {
  return (
    <li className="card">
      <img className="card-img" src={`${avatar}`} alt="avatar" />
      <div className="card-description">
        <p className="first-name">Name:{first_name}</p>
        <p className="email">Email: {email}</p>
        <p className="gender">Gender: {gender}</p>
      </div>
    </li>
  );
};

export default Card;
