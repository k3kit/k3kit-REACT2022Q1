import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard, ICharacter, ISingleCard } from '../../models/ICharacter';
import { fetchCharacter, fetchSingleCharacter } from './action-creater/character';

interface CharacterState {
  character: ICard[];
  singleCard: ISingleCard;
  isLoading: boolean;
  error: string;
  value: string;
  page: string;
  gender: string;
  status: string;
  species: string;
  count: number;
  pages: number;
}
const initialState: CharacterState = {
  character: [],
  singleCard: {},
  isLoading: false,
  error: '',
  value: '',
  page: '',
  gender: '',
  status: '',
  species: '',
  count: 0,
  pages: 1,
};

export const CharacterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
    setPage(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setSpecies(state, action: PayloadAction<string>) {
      state.species = action.payload;
    },
    inc(state, action: PayloadAction<number>) {
      state.pages += action.payload;
    },
    dec(state, action: PayloadAction<number>) {
      state.pages -= action.payload;
    },
  },
  extraReducers: {
    [fetchCharacter.fulfilled.type]: (state, action: PayloadAction<ICharacter>) => {
      state.isLoading = false;
      state.error = '';
      state.character = action.payload.results;
      state.count = action.payload.info.count;
    },
    [fetchCharacter.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacter.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchSingleCharacter.fulfilled.type]: (state, action: PayloadAction<ISingleCard>) => {
      state.isLoading = false;
      state.singleCard = action.payload;
    },
  },
});

export default CharacterSlice.reducer;
