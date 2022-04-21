/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useReducer } from 'react';
import appContext from './app-context';
import appReducer, { AppActionKind } from './app-reducer';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props {
  children: any;
}
const AppState: FC<Props> = ({ children }) => {
  const initialState = {
    value: '',
  };
  const addValue = (e: any) => {
    dispatch({ type: AppActionKind.SET_VALUE, payload: e });
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <appContext.Provider
      value={{
        value: state.value,
        addValue,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
