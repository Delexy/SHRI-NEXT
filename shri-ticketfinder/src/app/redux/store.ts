import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart';
import { movieApi } from './services/movieApi';
import { filterReducer } from './features/filter';

const reducer = combineReducers({
  cart: cartReducer,
  [movieApi.reducerPath]: movieApi.reducer,
  filter: filterReducer,
});

export const createStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
  });
};

const store = createStore();

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
export default store;
