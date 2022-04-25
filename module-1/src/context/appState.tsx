import React, { FC, useReducer } from 'react';
import { Data } from '../components/forms/forms';
import appContext from './app-context';
import appReducer, { AppActionKind } from './app-reducer';

const AppState: FC = ({ children }) => {
  const initialState = {
    value: '',
    data: [],
    currentPage: 1,
    totalCount: 0,
    isPending: true,
    isPendingСard: true,
    error: false,
    character: [],
    status: '',
    gender: '',
    species: '',
    card: [],
  };
  const addValue = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch({ type: AppActionKind.SET_VALUE, payload: event });
  };
  const setStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: AppActionKind.UPDATE_STATUS, payload: event });
  };
  const setGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: AppActionKind.UPDATE_GENDER, payload: event });
  };
  const setSpecies = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: AppActionKind.UPDATE_SPECIES, payload: event });
  };
  const addData = (state: Data) => {
    dispatch({ type: AppActionKind.SET_DATA_FORM, payload: state });
  };
  const setCurrentPage = (page: number) => {
    dispatch({ type: AppActionKind.SET_CURRENT_PAGE, payload: page });
  };
  const FetchError = () => {
    dispatch({ type: AppActionKind.FETCH_ERROR });
  };
  const FetchData = (data: []) => {
    dispatch({ type: AppActionKind.FETCH_SUCCESS, payload: data });
  };
  const FetchSlice = (data: []) => {
    dispatch({ type: AppActionKind.FETCH_SLICE, payload: data });
  };
  const FetchCard = (data: []) => {
    dispatch({ type: AppActionKind.FETCH_SINGLE_CARD, payload: data });
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <appContext.Provider
      value={{
        value: state.value,
        addValue,
        data: state.data,
        addData,
        setCurrentPage,
        perPage: state.perPage,
        totalCount: state.totalCount,
        currentPage: state.currentPage,
        isPending: state.isPending,
        error: state.error,
        character: state.character,
        FetchError,
        FetchData,
        FetchSlice,
        status: state.status,
        gender: state.gender,
        species: state.species,
        setStatus,
        setGender,
        setSpecies,
        FetchCard,
        card: state.card,
        isPendingСard: state.isPendingСard,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
