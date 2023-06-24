'use client';

import Input from '../Input/Input';
import style from './style.module.scss';
import Select from '../Select/Select';
import { genres } from '@/enums/genres';
import { useCallback, useEffect } from 'react';
import { useGetCinemasQuery } from '@/app/redux/services/movieApi';
import { useAppDispatch } from '@/app/hooks/redux';
import { filterAction } from '@/app/redux/features/filter';

const genreValues = Object.entries(genres).map(([value, text]) => ({ value, text }));

let headerHeight = 0;
const Filter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    headerHeight = document.querySelector('header')?.clientHeight || 0;
  }, []);

  const { data, isLoading } = useGetCinemasQuery([]);
  const cinemas = data?.map((item: { id: string; name: string; movieIds: string[] }) => ({ value: item.id, text: item.name }));

  const inputOnChange = useCallback((value: string) => {
    dispatch(filterAction.setFilter({ type: 'byName', value }));
  }, []);

  return (
    <div className={`${style['filter']} content-wrapper`}>
      <div className={style['filter__container']} style={{ top: `${headerHeight}px` }}>
        <p className={style['filter__title']}>Фильтр поиска</p>
        <Input label='Название' placeholder='Введите название фильма' onChange={inputOnChange}></Input>
        <Select
          label='Жанр'
          values={genreValues}
          placeholder='Выберите жанр'
          onChange={(value: string | undefined) => {
            dispatch(filterAction.setFilter({ type: 'byGenre', value }));
          }}
        ></Select>
        <Select
          label='Кинотеатр'
          values={isLoading ? [] : cinemas}
          placeholder='Выберите кинотеатр'
          onChange={(value: string | undefined) => {
            dispatch(filterAction.setFilter({ type: 'byCinema', value }));
          }}
        ></Select>
      </div>
    </div>
  );
};

export default Filter;
