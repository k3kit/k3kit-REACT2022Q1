import React, { useEffect, useState } from 'react';
import Spinner from '../loading/spinner';
import { SearchBar } from '../search-bar/search';
import { CardItem } from './CardItem';
import './style.css';

export const CardList = () => {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
      if (response.status >= 400) {
        setError(true);
      } else {
        const data = await response.json();
        setCharacter(data.results);
        setError(false);
        console.log(character);
        setIsPending(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} value={value} setValue={setValue} />
      {error && <h2 className="error">No Characters Found</h2>}
      {isPending && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <section className="card-section">
        <div className="card-items">
          {character.map((char, i) => {
            const idx = i;
            return <CardItem key={idx} char={char} />;
          })}
        </div>
      </section>
    </>
  );
};
