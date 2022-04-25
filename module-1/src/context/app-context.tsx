/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { AppActionKind } from './app-reducer';

const appContext = createContext<any>({});
export default appContext;
