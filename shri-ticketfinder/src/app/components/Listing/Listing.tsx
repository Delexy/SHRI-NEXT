import { FC } from 'react';
import Card from '../Card/Card';
import style from './style.module.scss';
import { TFilm } from '@/app/types/global';

type TListingProps = {
  values: TFilm[]
}

const Listing: FC<TListingProps> = ({values}) => {
  return (
    <div className={style['listing']}>
      {values.map((film) => (
        <Card
          key={film.id}
          title={film.title}
          posterUrl={film.posterUrl}
          releaseYear={film.posterUrl}
          description={film.description}
          genre={film.genre}
          id={film.id}
          rating={film.rating}
          director={film.director}
        ></Card>
      ))}
    </div>
  );
}

export default Listing;
