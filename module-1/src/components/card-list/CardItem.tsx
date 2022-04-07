import React, { Component } from 'react';
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
      <li key={el.id}>
        <p>{el.name}</p>
        <p>{el.status}</p>
        <p>{el.species}</p>
        <p>{el.type}</p>
        <p>{el.gender}</p>
      </li>
    );
  }
}
