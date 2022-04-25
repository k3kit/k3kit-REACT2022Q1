/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useReducer } from 'react';
import { UserType } from '../components/forms/cards-from';
import appContext from './app-context';
import appReducer, { AppActionKind } from './app-reducer';

interface Props {
  children: any;
}
const AppState: FC<Props> = ({ children }) => {
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
  const addValue = (e: any) => {
    dispatch({ type: AppActionKind.SET_VALUE, payload: e });
  };
  const setStatus = (e: any) => {
    dispatch({ type: AppActionKind.UPDATE_STATUS, payload: e });
  };
  const setGender = (e: any) => {
    dispatch({ type: AppActionKind.UPDATE_GENDER, payload: e });
  };
  const setSpecies = (e: any) => {
    dispatch({ type: AppActionKind.UPDATE_SPECIES, payload: e });
  };
  const addData = (state: any) => {
    dispatch({ type: AppActionKind.SET_DATA_FORM, payload: state });
  };
  const setCurrentPage = (page: any) => {
    dispatch({ type: AppActionKind.SET_CURRENT_PAGE, payload: page });
  };
  const FetchError = () => {
    dispatch({ type: AppActionKind.FETCH_ERROR });
  };
  const FetchData = (data: any) => {
    dispatch({ type: AppActionKind.FETCH_SUCCESS, payload: data });
  };
  const FetchSlice = (data: any) => {
    dispatch({ type: AppActionKind.FETCH_SLICE, payload: data });
  };
  const FetchCard = (data: any) => {
    dispatch({ type: AppActionKind.FETCH_SINGLE_CARD, payload: data });
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
