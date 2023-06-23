'use client';

import { FC, PropsWithChildren } from 'react';
import Reviews from '@/app/components/Reviews/Reviews';
import Image from 'next/image';
import style from './style.module.scss';
import Counter from '@/app/components/Counter/Counter';
import { TFilm } from '@/app/types/global';
import { useGetMovieQuery } from '@/app/redux/services/movieApi';
import { genres } from '@/enums/genres';

type TFilmProps = {
  params: any;
};

const Film: FC<TFilmProps> = ({ params }) => {
  const filmId = params.id;
  const { data, isLoading } = useGetMovieQuery(filmId) as { data: TFilm | undefined; isLoading: boolean };
  if (isLoading) {
    return <div>Получаем данные по фильму</div>;
  }

  if (!data) {
    return <div>Фильм не найден</div>;
  }

  return (
    <>
      <div className={style.film}>
        <Image className={style['film__image']} src={data.posterUrl || '/imgs/photo.svg'} alt={data.title} width={400} height={500} />
        <div>
          <h1 className={style['film__title']}>{data.title}</h1>
          <div className={style['film__props']}>
            <div className={style['film__prop']}>
              <span>Жанр:</span>
              <span>{genres[data.genre]}</span>
            </div>
            <div className={style['film__prop']}>
              <span>Год выпуска:</span>
              <span>{data.releaseYear}</span>
            </div>
            <div className={style['film__prop']}>
              <span>Рейтинг:</span>
              <span>{data.rating}</span>
            </div>
            <div className={style['film__prop']}>
              <span>Режиссер:</span>
              <span>{data.director}</span>
            </div>
          </div>
          <div className={style['film__desc']}>
            <p>Описание</p>
            <p>{data.description}</p>
          </div>
        </div>
        <div className={style['film__counter']}>
          <Counter filmId={data.id}></Counter>
        </div>
      </div>
      {/* <Reviews reviews={reviews}></Reviews> */}
    </>
  );
};

export default Film;
