/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useReducer, useState } from 'react';
import appContext from '../../context/app-context';
import Spinner from '../loading/spinner';
import { SearchBar } from '../search-bar/search';
import { CardItem, Icharacter } from './CardItem';
import { createPages } from './fun';
import './style.css';
enum CardActionKind {
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_ERROR = 'FETCH_ERROR',
}
interface CardState {
  isPending: boolean;
  error: boolean;
  character: Icharacter;
}
interface CardAction {
  payload: Icharacter;
  type: CardActionKind;
}
const initialState = { isPending: true, error: false, character: [], totalCount: 0 };
const reducer = (state: any, action: any) => {
  const { type } = action;
  switch (type) {
    case CardActionKind.FETCH_SUCCESS:
      return {
        isPending: false,
        character: action.payload.results,
        error: false,
        totalCount: action.payload.info.count,
      };
    case CardActionKind.FETCH_ERROR:
      return {
        isPending: false,
        error: true,
        character: [],
      };
    default:
      return state;
  }
};

export const CardList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { value, currentPage, setCurrentPage } = useContext(appContext);
  const pagesCount = Math.ceil(state.totalCount / 20);
  console.log(pagesCount);
  const pages: any[] = [];
  createPages(pages, pagesCount, currentPage);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${value}`
        );
        if (response.status >= 400) {
          dispatch({ type: CardActionKind.FETCH_ERROR });
          setCurrentPage(1);
        } else {
          const data = await response.json();
          console.log(state.character);

          dispatch({
            type: CardActionKind.FETCH_SUCCESS,
            payload: data,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [value, currentPage]);

  const handlePreviousPage = () => {
    const a = currentPage + 1;
    setCurrentPage(a);
  };

  const handleNextPage = () => {
    const a = currentPage - 1;
    setCurrentPage(a);
  };

  const handleFPage = () => {
    state.character.slice(10);
    console.log(state.character.slice(10));
  };
  const handleSPage = () => {};
  const handleTPage = () => {};
  return (
    <>
      <SearchBar />
      {state.error && <h2 className="error">No Characters Found</h2>}
      {state.isPending && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <section className="card-section">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={handlePreviousPage}>
                Next
              </button>
            </li>
            <li className="page-item">
              <span>
                {currentPage}/{pagesCount}
              </span>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={handleNextPage}>
                Previous
              </button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={handleFPage}>
                20
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={handleSPage}>
                30
              </button>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={handleTPage}>
                40
              </button>
            </li>
          </ul>
        </nav>
        <div className="card-items">
          {state.character.map((char: Icharacter, i: any) => {
            const idx = i;
            return <CardItem key={idx} char={char} />;
          })}
        </div>
        <div className="pages">
          {pages.map((page: any, index: any) => {
            return (
              <span
                className={currentPage === page ? 'current-page' : 'page'}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
};
