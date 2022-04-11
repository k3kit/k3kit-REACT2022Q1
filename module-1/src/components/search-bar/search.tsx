import React, { Component, FormEventHandler } from 'react';
import SearchButton from './search-button';
import './style.css';
interface MyProps {
  value: string;
  value2: string;
  onChanges: React.ChangeEventHandler<HTMLInputElement>;
  s: FormEventHandler<HTMLFormElement>;
}
export default class SearchBar extends Component<MyProps> {
  render() {
    return (
      <section>
        <form onSubmit={this.props.s} className="search-bar" data-testid="form">
          <label> Search: </label>
          <input
            className="search-input"
            name="search"
            value={this.props.value || ''}
            type="text"
            onChange={this.props.onChanges}
            data-testid="input"
          />
          <SearchButton />
        </form>
      </section>
    );
  }
}
