import { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import type { TFilm } from '@/app/types/global';
import Image from 'next/image';
import Counter from '../Counter/Counter';
import { genres } from '@/enums/genres';

type TCardProps = {
  removeCallback?: (id: TFilm['id']) => void;
} & TFilm;

const Card: FC<TCardProps> = (props) => {
  return (
    <div className={`${style['card']} content-wrapper`}>
      <Link href={`/film/${props.id}`}>
        <Image className={style['card__img']} src={props.posterUrl || '/imgs/photo.svg'} alt={props.title} width={100} height={120} loading='lazy' />
      </Link>
      <div className={style['card__info']}>
        <Link className={style['card__title']} href={`/film/${props.id}`}>
          {props.title}
        </Link>
        <p className={style['card__genre']}>{genres[props.genre]}</p>
      </div>
      <div className={style['counter']}>
        <Counter filmId={props.id}></Counter>
      </div>
      {props.removeCallback && <button onClick={() => props.removeCallback!(props.id)} className={style['card__remove']}></button>}
    </div>
  );
};

export default Card;
