import { FC, HTMLInputTypeAttribute } from 'react';
import style from './style.module.scss';

type TSelect = {
  label: string;
  initialValue?: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: () => {};
  placeholder?: string;
};

const Input: FC<TSelect> = ({ label, initialValue, type = 'text', onChange = () => {}, placeholder }) => {
  return (
    <label className={style['input']}>
      <span className={style['input__title']}>{label}</span>
      <input type={type} value={initialValue} placeholder={placeholder} />
    </label>
  );
};

export default Input;
