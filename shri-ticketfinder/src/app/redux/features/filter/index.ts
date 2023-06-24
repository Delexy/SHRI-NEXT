import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, string | undefined> = {
  byName: '',
  byGenre: '',
  byCinema: ''
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{type: 'byName' | 'byGenre' | 'byCinema', value: string | undefined}>) => {
      const {type, value} = action.payload;
      state[type] = value;
    },
  }
});


export const filterReducer = filterSlice.reducer;
export const filterAction = filterSlice.actions;
