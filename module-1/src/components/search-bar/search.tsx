import React, { Component } from 'react';
import SearchButton from './search-button';
import './style.css';
interface ISearch {
  searchInput: string;
}
interface MyProps {
  value: string;
  onChanges: React.ChangeEventHandler<HTMLInputElement>;
}
export default class SearchBar extends Component<MyProps> {
  state: ISearch = {
    searchInput: '',
  };

  handeleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  componentWillUnmount() {
    localStorage.setItem('searchInput', this.props.value);
    console.log('unmount');
  }

  componentDidMount() {
    this.setState({ searchInput: localStorage.getItem('searchInput') });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handeleFormSubmit} className="search-bar">
          <label>Search:</label>
          <input
            className="search-input"
            name="search"
            value={this.props.value}
            type="text"
            onChange={this.props.onChanges}
          />
          <SearchButton />
        </form>
      </section>
    );
  }
}
