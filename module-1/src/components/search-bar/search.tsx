import React, { Component } from 'react';

interface ISearch {
  searchInput: string;
}

export default class SearchBar extends Component {
  state: ISearch = {
    searchInput: '',
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: event.target.value });
    const { searchInput } = this.state;
    localStorage.setItem('searchInput', searchInput);
  };

  handeleFormSubmit = () => {
    const { searchInput } = this.state;
    localStorage.setItem('searchInput', searchInput);
    // e.preventDefault();
  };
  render() {
    return (
      <form onChange={this.handeleFormSubmit}>
        <label></label>
        <input name="sear" type="text" placeholder="Search" onChange={this.handleChange} />
      </form>
    );
  }
}
