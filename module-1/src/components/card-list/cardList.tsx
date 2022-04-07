import React, { Component } from 'react';
import { json } from 'stream/consumers';
import { CardItem } from './CardItem';
import './style.css';
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
      <section className="card-section">
        <div className="card-items">
          {data.map((el, i) => {
            return <CardItem el={el} key={i} />;
          })}
        </div>
      </section>
    );
  }
}
