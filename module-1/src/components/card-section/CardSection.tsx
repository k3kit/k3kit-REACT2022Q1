import React, { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCharacter } from '../../store/reducers/action-creater/character';
import Spinner from '../loading/spinner';
import { SearchBar } from '../search-bar/search';
import { CardItem } from './CardItem';
import Pagination from './Pagination';
import './style.css';

export const CardSection: FC = () => {
  const dispatch = useAppDispatch();
  const { character, isLoading, error, value, pages, gender, status, species } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    console.log(character);
    dispatch(
      fetchCharacter({
        value,
        pages,
        gender,
        status,
        species,
      })
    );
  }, [dispatch, gender, pages, species, status, value]);

  return (
    <>
      <SearchBar />
      <section className="card-section">
        <Pagination />
        {isLoading && (
          <div className="loader">
            <Spinner />
          </div>
        )}
        {error && <h2 className="error">No Characters Found</h2>}
        <div className="card-items">
          {character.map((char, i: number) => {
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
