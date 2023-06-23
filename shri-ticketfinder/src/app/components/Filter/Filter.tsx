'use client';

import Input from '../Input/Input';
import style from './style.module.scss';
import Select from '../Select/Select';
import { genres } from '@/enums/genres';
import { useEffect } from 'react';

const genreValues = Object.entries(genres).map(([value, text]) => ({ value, text }));

let headerHeight = 0;
const Filter = () => {

  useEffect(() => {
    headerHeight = document.querySelector('header')?.clientHeight || 0;
  }, []);

  return (
    <div className={`${style['filter']} content-wrapper`}>
      <div className={style['filter__container']} style={{ top: `${headerHeight}px` }}>
        <p className={style['filter__title']}>Фильтр поиска</p>
        <Input label='Название' placeholder='Введите название фильма'></Input>
        <Select label='Жанр' values={genreValues} placeholder='Выберите жанр'></Select>
        <Select label='Кинотеатр' values={genreValues} placeholder='Выберите кинотеатр'></Select>
      </div>
    </div>
  );
};

export default Filter;
