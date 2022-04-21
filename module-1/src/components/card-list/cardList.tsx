/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useReducer } from 'react';
import appContext from '../../context/app-context';
import Spinner from '../loading/spinner';
import { SearchBar } from '../search-bar/search';
import { CardItem, Icharacter } from './CardItem';
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
const initialState = { isPending: true, error: false, character: [] };
const reducer = (state: any, action: any) => {
  const { type } = action;
  switch (type) {
    case CardActionKind.FETCH_SUCCESS:
      return {
        isPending: false,
        character: action.payload,
        error: false,
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
  const { value } = useContext(appContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
        if (response.status >= 400) {
          dispatch({ type: CardActionKind.FETCH_ERROR });
        } else {
          const data = await response.json();
          dispatch({ type: CardActionKind.FETCH_SUCCESS, payload: data.results });
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [value]);
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
        <div className="card-items">
          {state.character.map((char: Icharacter, i: any) => {
            const idx = i;
            return <CardItem key={idx} char={char} />;
          })}
        </div>
      </section>
    </>
  );
};
