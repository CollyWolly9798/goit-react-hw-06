import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export default slice.reducer;
export const { changeFilter } = slice.actions;
