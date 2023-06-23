'use client';

import Link from 'next/link';
import style from './style.module.scss';
import { useAppSelector } from '@/app/hooks/redux';
import { selectAmountTickets } from '@/app/redux/features/cart/selector';

const Header = () => {
  const cartAmount = useAppSelector(selectAmountTickets);
  return (
    <header className={`row justify-between align-center ${style.header}`}>
      <Link href='/' className={style['header__logo']}>
        Билетопоиск
      </Link>
      <Link href='/cart' className={style['header__cart']}>
        {!!cartAmount && <span className={style['header__counter']}>{cartAmount}</span>}
      </Link>
    </header>
  );
};

export default Header;
