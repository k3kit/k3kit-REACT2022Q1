import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICard, ISingleCard } from '../../../models/ICharacter';
interface api {
  pages: number;
  value: string;
  gender: string;
  status: string;
  species: string;
}
interface ap {
  id: string | undefined;
}

export const fetchCharacter = createAsyncThunk(
  'character/fetchAll',
  async ({ value, pages, status, gender, species }: api, thunkAPI) => {
    try {
      const response = await axios.get<ICard[]>(
        `https://rickandmortyapi.com/api/character/?page=${pages}&name=${value}&status=${status}&gender=${gender}&species=${species}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);

export const fetchSingleCharacter = createAsyncThunk(
  'character/fetchSingle',
  async ({ id }: ap, thunkAPI) => {
    try {
      const response = await axios.get<ISingleCard>(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);
