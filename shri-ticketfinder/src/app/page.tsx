'use client';

import Filter from './components/Filter/Filter';
import Listing from './components/Listing/Listing';
import { useGetMoviesQuery } from './redux/services/movieApi';

import style from './style.module.scss';

const Home = () => {
  const { data, isLoading } = useGetMoviesQuery(undefined);

  return (
    <div className={style['main-page']}>
      <Filter></Filter>
      {isLoading ? <div>Происходит загрузка фильмов =)</div> : <Listing values={data}></Listing>}
    </div>
  );
};

export default Home;
