import React, { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../../context/app-context';
import Spinner from '../loading/spinner';
import { SearchBar } from '../search-bar/search';
import { CardItem, Icharacter } from './CardItem';
import './style.css';

export const CardList: FC = () => {
  const {
    value,
    currentPage,
    setCurrentPage,
    totalCount,
    isPending,
    error,
    character,
    FetchData,
    FetchError,
    status,
    gender,
    species,
    setStatus,
    setGender,
    setSpecies,
  } = useContext(appContext);
  const spec = [
    '',
    'Human',
    'Alien',
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];
  const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${value}&status=${status}&gender=${gender}&species=${species}`;
  const genders = ['', 'female', 'male', 'genderless', 'unknown'];
  const pagesCount = Math.ceil(totalCount / 20);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (response.status >= 400) {
          FetchError();
          setCurrentPage(1);
          console.log(url);
        } else {
          const data = await response.json();
          FetchData(data);
          console.log(totalCount);

          console.log(url);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [url]);

  const handlePreviousPage = () => {
    const a = currentPage + 1;
    if (a < pagesCount + 1) {
      setCurrentPage(a);
    }
  };

  const handleNextPage = () => {
    const a = currentPage - 1;
    if (a > 0) {
      setCurrentPage(a);
    }
  };

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };
  const handleGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };
  const handleSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecies(event.target.value);
  };
  return (
    <>
      <SearchBar />
      {error && <h2 className="error">No Characters Found</h2>}
      {isPending && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <section className="card-section">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={handlePreviousPage}>
                Next page
              </button>
            </li>
            <li className="page-item">
              <span className="pages-count">
                {currentPage}/{pagesCount}
              </span>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={handleNextPage}>
                Previous page
              </button>
            </li>
            <li className="page-item">
              <span>Status</span>
              <select className="page-link" onChange={handleStatus}>
                <option value=""></option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="Unknown">Unknown</option>
              </select>
            </li>
            <li className="page-item">
              <span>Species</span>
              <select className="page-link" onChange={handleSpecies}>
                {spec.map((ele, i) => {
                  return (
                    <option value={ele} key={i}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </li>
            <li className="page-item">
              <span>Genders</span>
              <select className="page-link" onChange={handleGender}>
                {genders.map((el, i) => {
                  return (
                    <option value={el} key={i}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </li>
          </ul>
        </nav>
        <div className="card-items">
          {character.map((char: Icharacter, i: number) => {
            const idx = i;
            return (
              <Link key={idx} to={`${char.id}`}>
                <CardItem key={idx} char={char} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
