'use client';

import { FC } from 'react';
import style from './style.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { selectTicketAmount } from '@/app/redux/features/cart/selector';
import { cartAction } from '@/app/redux/features/cart';

type TCounter = {
  filmId: string
};

const Counter: FC<TCounter> = ({ filmId }) => {
  const initialValue = useAppSelector((state) => selectTicketAmount(state, filmId));
  const dispatch = useAppDispatch();

  return (
    <div className={`${style['counter']}`}>
      <button className={`${style['counter__minus']} ${style['counter__btn']}`} onClick = {() => dispatch(cartAction.decrement(filmId))} disabled={initialValue == 0}></button>
      <span className={style['counter__value']}>{initialValue}</span>
      <button className={`${style['counter__plus']} ${style['counter__btn']}`} onClick = {() => dispatch(cartAction.increment(filmId))} disabled={initialValue == 30}></button>
    </div>
  );
};

export default Counter;
