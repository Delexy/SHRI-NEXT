import { FC, useCallback, useState } from 'react';
import style from './style.module.scss';

type TCounter = {
  classNames?: string;
  initialValue: number;
  incrementCallback: (count: number) => void;
  decrementCallback: (count: number) => void;
};

const Counter: FC<TCounter> = ({ classNames, initialValue, incrementCallback, decrementCallback }) => {
  // MAX 30 tickets
  // const [count, setCount] = useState<TCounter['initialValue']>(initialValue);
  // const decrement = useCallback(() => {
  //   if (count == 0) return;
  //   setCount(count - 1);
  //   decrementCallback(count);
  // }, [count, decrementCallback]);
  // const increment = useCallback(() => {
  //   setCount(count + 1);
  //   incrementCallback(count);
  // }, [count, incrementCallback]);
  return (
    <div className={`${style['counter']}`}>
      <button className={`${style['counter__minus']} ${style['counter__btn']}`}></button>
      <span className={style['counter__value']}>0</span>
      <button className={`${style['counter__plus']} ${style['counter__btn']}`}></button>
    </div>
  );
};

export default Counter;
