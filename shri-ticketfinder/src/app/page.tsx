'use client';

import Filter from './components/Filter/Filter';
import Listing from './components/Listing/Listing';
import { useAppSelector } from './hooks/redux';
import { selectFilterModule } from './redux/features/filter/selector';
import { useGetCinemasQuery, useGetMoviesQuery } from './redux/services/movieApi';

import style from './style.module.scss';
import { TCinema, TFilm } from './types/global';

const Home = () => {
  const { data, isLoading, error } = useGetMoviesQuery(undefined);
  const { byCinema, byName, byGenre } = useAppSelector(selectFilterModule);
  const { data: cinemas, isLoading: isLoadingCinemas } = useGetCinemasQuery([]);
  let filteredMovies: TFilm[] = [];

  if (!isLoading && !error) {
    filteredMovies = data.slice();

    if (data && (byCinema || byName || byGenre)) {
      if (byCinema && !isLoadingCinemas) {
        const cinema = cinemas.find((cinema: TCinema) => cinema.id == byCinema);
        filteredMovies = filteredMovies.filter((movie) => cinema.movieIds.find((cinemaMovie: string) => cinemaMovie == movie.id));
      }
      if (byName) {
        filteredMovies = filteredMovies.filter((movie) => movie.title.toLocaleLowerCase().includes(byName.toLocaleLowerCase()));
      }
      if (byGenre) {
        filteredMovies = filteredMovies.filter((movie) => movie.genre == byGenre);
      }
    }
  }

  return (
    <div className={style['main-page']}>
      <Filter></Filter>
      {isLoading ? <div>Происходит загрузка фильмов =)</div> : <Listing values={filteredMovies}></Listing>}
    </div>
  );
};

export default Home;
