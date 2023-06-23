'use client';

import { FC, PropsWithChildren, ReactNode } from 'react';
import style from './style.module.scss';

type TModalProps = {
  title: string;
  text?: string;
  closeFunction: () => void;
  renderBtns?: () => ReactNode;
};

const Modal: FC<PropsWithChildren<TModalProps>> = ({ children, title, text, closeFunction, renderBtns }) => {
  return (
    <>
      <div className={style['backdrop']} onClick={() => closeFunction()}></div>
      <div className={`${style['modal']} content-wrapper`}>
        <button className={style['modal__close']} onClick={() => closeFunction()}></button>
        <span className={style['modal__title']}>{title}</span>
        {!!text && <span className={style['modal__text']}>{text}</span>}
        {!!renderBtns && <div className={style['modal__btns']}>{renderBtns()}</div>}
      </div>
    </>
  );
};

export default Modal;
