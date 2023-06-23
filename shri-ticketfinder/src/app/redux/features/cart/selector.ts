import { RootState } from '../../store';

export const selectCartModule = (state: RootState) => state.cart;

export const selectTicketAmount = (state: RootState, id: string) => selectCartModule(state)[id] || 0;

export const selectAmountTickets = (state: RootState) => Object.keys(selectCartModule(state)).length;
