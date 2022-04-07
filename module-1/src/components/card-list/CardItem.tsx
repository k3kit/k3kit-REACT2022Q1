import React, { Component } from 'react';
import './style.css';
interface a {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [];
  url: string;
  created: string;
}

interface MyProps {
  el: a;
}

export class CardItem extends Component<MyProps> {
  render() {
    const { el } = this.props;
    return (
      <li className="card" key={el.id}>
        <img className="card-img" src={`${el.image}`} alt="avatar" />
        <div className="card-description">
          <h3>{el.name}</h3>
          <p>{el.status}</p>
          <p>{el.species}</p>
          <p>{el.type}</p>
          <p>{el.gender}</p>
        </div>
      </li>
    );
  }
}
