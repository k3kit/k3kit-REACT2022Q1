import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IForm = {
  firstName: string;
  lastName: string;
  country: string;
  birthDate: string;
  gender: string;
  agree: boolean;
  file: string;
};

interface FormState {
  formData: IForm[];
}

const initialState: FormState = {
  formData: [],
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addData(state, action: PayloadAction<IForm>) {
      state.formData.push(action.payload);
    },
  },
});
export default FormSlice.reducer;
