import React, { FC, useContext, useState } from 'react';
import appContext from '../../context/app-context';
import SearchButton from './search-button';
import './style.css';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}
export const SearchBar: FC<Props> = () => {
  const { addValue } = useContext(appContext);
  const [query, setQuery] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handeleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addValue(query);
  };
  return (
    <section>
      <form onSubmit={handeleFormSubmit} className="search-bar" data-testid="form">
        <label> Search: </label>
        <input
          className="search-input"
          name="search"
          value={query || ''}
          type="text"
          onChange={onChangeHandler}
          data-testid="input"
        />
        <SearchButton />
      </form>
    </section>
  );
};
