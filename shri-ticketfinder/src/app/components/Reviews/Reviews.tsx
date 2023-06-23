import { FC } from 'react';
import style from './style.module.scss';
import Image from 'next/image';

type TReview = {
  id: string;
  image: string;
  name: string;
  text: string;
  rating: number;
};

type TReviewsProps = {
  reviews: TReview[];
};

const Reviews: FC<TReviewsProps> = ({ reviews = [] }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className={`row content-wrapper ${style['review']}`}>
          <Image className={style['review__img']} src={review.image || '/imgs/photo.svg'} width={100} height={100} alt={review.name} />
          <div className={style['review__info']}>
            <div className={`row justify-between`}>
              <p className={style['review__name']}>{review.name}</p>
              <p className={style['review__rating']}>Оценка: <span>{review.rating}</span></p>
            </div>
            <p className={style['review__desc']}>{review.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
