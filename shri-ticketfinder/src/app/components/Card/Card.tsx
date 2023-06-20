import { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import type { TFilm } from '@/app/types/global';
import Image from 'next/image';
import Counter from '../Counter/Counter';

const Card: FC<TFilm> = (props) => {
  return (
    <div className={`${style['card']} content-wrapper`}>
      <Link href={`/film/${props.id}`}>
        {!!props.posterUrl ? <Image className={style['card__img']} src={props.posterUrl} alt={props.title} width={100} height={120} /> : ''}
      </Link>
      <div className={style['card__info']}>
        <Link className={style['card__title']} href={`/film/${props.id}`}>
          {props.title}
        </Link>
        <p className={style['card__genre']}>{props.genre}</p>
      </div>
      <div className={style['counter']}>
        <Counter initialValue={0} decrementCallback={(test: number) => {}} incrementCallback={(test: number) => {}}></Counter>
      </div>
    </div>
  );
};

export default Card;
