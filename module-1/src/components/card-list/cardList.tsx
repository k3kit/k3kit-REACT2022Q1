import React, { Component } from 'react';
import Spinner from '../loading/spinner';
import SearchBar from '../search-bar/search';
import { CardItem } from './CardItem';
import './style.css';
export class CardList extends Component {
  state = {
    data: [],
    value: '',
    value2: '',
    error: false,
    loading: true,
  };

  componentWillUnmount() {
    // localStorage.setItem('searchInput', this.state.value2);
    // localStorage.setItem('searchInput', this.state.value);
  }

  async componentDidMount() {
    // this.setState({ value: localStorage.getItem('searchInput') });
    // this.setState({ value2: localStorage.getItem('searchInput') });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${this.state.value}`
      );
      const data = await response.json();
      this.setState({ data: data.results, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  handeleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ value: this.state.value2 });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value2: event.target.value });
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
        <SearchBar
          value={this.state.value2 || ''}
          value2={this.state.value || ''}
          onChanges={this.handleChange}
          s={this.handeleFormSubmit}
        />
        {spin}
        {cards}
      </>
    );
  }
}
