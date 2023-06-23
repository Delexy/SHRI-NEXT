import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, number> = {};

const maxTickets = 30;
const minTickets = 0;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const count = state[id] || 0;

      state[id] = count + 1 >= maxTickets ? count : count + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const count = state[id] || 0;
      if(!count) {
        return;
      }

      if(count - 1 <= minTickets) {
        delete state[id];
        return;
      }

      state[id] = count - 1;
    },
    reset: () => initialState,
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if(!state[id]) {
        return;
      }

      delete state[id];
    }
  }
});


export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
