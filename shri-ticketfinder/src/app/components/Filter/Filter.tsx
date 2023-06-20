'use client';

import { useLayoutEffect } from 'react';
import Input from '../Input/Input';
import style from './style.module.scss';

let headerHeight: number;

const Filter = () => {
  useLayoutEffect(() => {
    headerHeight = document.querySelector('header')?.clientHeight || 0;
    if(headerHeight) {
      headerHeight += 24;
    }
  });
  return (
    <div className={`${style['filter']} content-wrapper`}>
      <div className={style['filter__container']}  style={{top: `${headerHeight}px`}}>
        <p className={style['filter__title']}>Фильтр поиска</p>
        <Input label='Название' placeholder='Введите название фильма'></Input>
      </div>
    </div>
  );
};

export default Filter;
