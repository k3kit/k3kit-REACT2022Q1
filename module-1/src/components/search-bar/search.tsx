import React, { FC, useContext, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CharacterSlice } from '../../store/reducers/CharacterSlice';
import SearchButton from './search-button';
import './style.css';

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { addValue } = CharacterSlice.actions;
  const [query, setQuery] = useState('');
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handeleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addValue(query));
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
