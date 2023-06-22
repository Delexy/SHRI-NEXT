import { FC, HTMLInputTypeAttribute } from 'react';
import style from './style.module.scss';
import localFont from 'next/font/local';

const SFPro = localFont({ src: '../../fonts/SFProText-Regular.ttf', weight: '400' });

type TInput = {
  label: string;
  initialValue?: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: () => {};
  placeholder?: string;
};

const Input: FC<TInput> = ({ label, initialValue, type = 'text', onChange = () => {}, placeholder }) => {
  return (
    <label className={`${style['input']} ${SFPro.className}`}>
      <span className={style['input__title']}>{label}</span>
      <input type={type} value={initialValue} placeholder={placeholder} />
    </label>
  );
};

export default Input;
