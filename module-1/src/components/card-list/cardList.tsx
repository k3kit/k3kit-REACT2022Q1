import React, { Component } from 'react';
import { json } from 'stream/consumers';
import SearchBar from '../search-bar/search';
import { CardItem } from './CardItem';
import './style.css';
export class CardList extends Component {
  state = {
    data: [],
    value: '',
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.state.value}`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ data: data.results });
    } catch (err) {
      console.log(err);
    }
    console.log(this.state.value);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  };
  async componentDidUpdate(prevProps: { value: string }, prevState: { value: string }) {
    if (prevState.value !== this.state.value) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.state.value}`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ data: data.results });
    }
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <SearchBar value={this.state.value} onChanges={this.handleChange} />
        <section className="card-section">
          <div className="card-items">
            {data.map((el, i) => {
              return <CardItem el={el} key={i} />;
            })}
          </div>
        </section>
      </>
    );
  }
}
