/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useReducer } from 'react';
import { UserType } from '../components/forms/cards-from';
import appContext from './app-context';
import appReducer, { AppActionKind } from './app-reducer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props {
  children: any;
}
const AppState: FC<Props> = ({ children }) => {
  const initialState = {
    value: '',
    data: [
      // {
      //   firstName: '',
      //   lastName: '',
      //   country: '',
      //   birthDate: '',
      //   gender: '',
      //   agree: false,
      //   file: '',
      // },
    ],
  };
  const addValue = (e: any) => {
    dispatch({ type: AppActionKind.SET_VALUE, payload: e });
  };
  const addData = (state: any) => {
    dispatch({ type: AppActionKind.SET_DATA_FORM, payload: state });
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
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
