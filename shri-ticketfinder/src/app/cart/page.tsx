'use client';

import { FC, useState } from 'react';
import Card from '../components/Card/Card';
import style from './style.module.scss';
import { createPortal } from 'react-dom';
import Modal from '../components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectAmountTickets, selectCartModule } from '../redux/features/cart/selector';
import { useGetMoviesQuery } from '../redux/services/movieApi';
import { TFilm } from '../types/global';
import { cartAction } from '../redux/features/cart';

const Cart = () => {
  const dispatch = useAppDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filmForRemoving, setFilmForRemoving] = useState<string | undefined>(undefined);
  const ticketsAmount = useAppSelector(selectAmountTickets);
  const cart = useAppSelector(selectCartModule);
  const { data, isLoading } = useGetMoviesQuery(undefined);

  if (isLoading) {
    return <div>Мы подгружаем фильмы</div>;
  }

  return (
    <>
      <div className={style['cart']}>
        {Object.keys(cart).map((filmId) => {
          const film = data.find((item: TFilm) => item['id'] == filmId);
          if (!film) return;
          return (
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
              removeCallback={(id) => {
                setModalIsOpen(true);
                setFilmForRemoving(id);
              }}
            ></Card>
          );
        })}

        <div className={`content-wrapper row justify-between ${style['result']}`}>
          <span>Итого билетов:</span>
          <span>{ticketsAmount}</span>
        </div>

        {modalIsOpen &&
          createPortal(
            <Modal
              title='Удаление билета'
              text='Вы уверены, что хотите удалить билет?'
              closeFunction={() => setModalIsOpen(false)}
              renderBtns={() => (
                <>
                  <button
                    className='btn btn_primary'
                    onClick={() => {
                      dispatch(cartAction.remove(filmForRemoving!));
                      setFilmForRemoving(undefined);
                      setModalIsOpen(false);
                    }}
                  >
                    Да
                  </button>
                  <button className='btn btn_secondary' onClick={() => setModalIsOpen(false)}>
                    Нет
                  </button>
                </>
              )}
            />,
            document.getElementById('modals-container')!
          )}
      </div>
    </>
  );
};

export default Cart;
