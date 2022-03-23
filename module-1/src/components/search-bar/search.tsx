import React, { Component } from 'react';
import SearchButton from './search-button';
import './style.css';
interface ISearch {
  [x: string]: string | number | readonly string[] | undefined;
  searchInput: string;
}

export default class SearchBar extends Component {
  state: ISearch = {
    searchInput: '',
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: event.target.value });
  };

  handeleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  componentWillUnmount() {
    const { searchInput } = this.state;
    localStorage.setItem('searchInput', searchInput);
  }
  componentDidMount() {
    console.log('mount');
    this.setState({ searchInput: localStorage.getItem('searchInput') });
  }
  render() {
    return (
      <form onSubmit={this.handeleFormSubmit} className="search-bar">
        <label>Search:</label>
        <input
          className="search-input"
          name="sear"
          value={this.state.searchInput}
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <SearchButton />
      </form>
    );
  }
}
