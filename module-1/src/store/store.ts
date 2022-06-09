import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/CharacterSlice';
import formReducer from './reducers/FormSlice';

const rootReducer = combineReducers({
  userReducer,
  formReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
