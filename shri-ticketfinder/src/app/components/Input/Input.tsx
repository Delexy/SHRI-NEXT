import { FC, FormEvent, HTMLInputTypeAttribute, useCallback } from 'react';
import style from './style.module.scss';
import localFont from 'next/font/local';
import { debounce } from '@/utils/debounce';

const SFPro = localFont({ src: '../../fonts/SFProText-Regular.ttf', weight: '400' });

type TInput = {
  label: string;
  initialValue?: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const Input: FC<TInput> = ({ label, initialValue, type = 'text', onChange = (value) => {}, placeholder }) => {
  const debouncedOnChange = debounce(onChange, 500);
  const onInput = useCallback((event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    if(target) {
      debouncedOnChange(target.value);
    }
  }, [debouncedOnChange]);
  return (
    <label className={`${style['input']} ${SFPro.className}`}>
      <span className={style['input__title']}>{label}</span>
      <input type={type} value={initialValue} placeholder={placeholder} onInput={(e: FormEvent) => onInput(e)}/>
    </label>
  );
};

export default Input;
