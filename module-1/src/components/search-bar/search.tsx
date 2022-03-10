import React, { Component } from 'react';
import SearchButton from './search-button';
import './style.css';
interface ISearch {
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
    const { searchInput } = this.state;
    localStorage.setItem('searchInput', searchInput);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handeleFormSubmit} className="search-bar">
        <label></label>
        <input
          className="search-input"
          name="sear"
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
        />
        <SearchButton />
      </form>
    );
  }
}
