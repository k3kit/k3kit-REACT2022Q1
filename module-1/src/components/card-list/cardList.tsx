import React, { Component } from 'react';
import { json } from 'stream/consumers';
import Spinner from '../lodading/spinner';
import SearchBar from '../search-bar/search';
import { CardItem } from './CardItem';
import './style.css';
export class CardList extends Component {
  state = {
    data: [],
    value: '',
    error: false,
    loading: true,
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.state.value}`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ data: data.results, loading: false });
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
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${this.state.value}`
        );
        if (response.status >= 400) {
          this.setState({ error: true });
        } else {
          const data = await response.json();
          this.setState({ data: data.results, error: false, loading: false });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  render() {
    const { data, error } = this.state;
    let cards;
    let spin;
    if (!error) {
      cards = (
        <section className="card-section">
          <div className="card-items">
            {data.map((el, i) => {
              return <CardItem el={el} key={i} loader={this.state.loading} />;
            })}
          </div>
        </section>
      );
    } else {
      cards = <h2 className="error">No Characters Found</h2>;
    }
    if (this.state.loading) {
      spin = (
        <div className="loader">
          <Spinner />;
        </div>
      );
    }
    return (
      <>
        <SearchBar value={this.state.value} onChanges={this.handleChange} />
        {spin}
        {cards}
      </>
    );
  }
}
