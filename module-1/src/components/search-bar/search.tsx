import React, { FC } from 'react';
import SearchButton from './search-button';
import './style.css';
interface MyProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchBar: FC<MyProps> = ({ query, setQuery, setValue }) => {
  const handeleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue(query);
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
          onChange={(event) => setQuery(event.target.value)}
          data-testid="input"
        />
        <SearchButton />
      </form>
    </section>
  );
};
