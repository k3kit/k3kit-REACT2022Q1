import React, { Component } from 'react';
import { json } from 'stream/consumers';
import { CardItem } from './CardItem';

export class CardList extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data);

      this.setState({ data: data.results.splice(0, 10) });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ul className="card-item">
          {data.map((el, i) => {
            return <CardItem el={el} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}
