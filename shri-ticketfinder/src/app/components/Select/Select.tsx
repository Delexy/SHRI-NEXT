'use client';

import { CSSProperties, FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
import style from './style.module.scss';
import { createPortal } from 'react-dom';

const SFPro = localFont({ src: '../../fonts/SFProText-Regular.ttf', weight: '400' });

type TSelect = {
  label: string;
  initialValue?: TValue;
  onChange?: (value: string | undefined) => void;
  placeholder?: string;
  values: TValue[];
};

export type TValue = {
  value: string;
  text: string;
};

const Select: FC<TSelect> = ({ label, initialValue, values = [], onChange = (value: string | undefined) => {}, placeholder }) => {
  const [value, setValue] = useState(initialValue);
  const [dropdownIsVisible, setDropdownVisible] = useState(false);
  const [coords, setCoords] = useState<CSSProperties | undefined>(undefined);
  const inputEl = useRef<HTMLDivElement>(null);

  const getCoords = (): CSSProperties | undefined => {
    const box = inputEl.current?.getBoundingClientRect();

    if (box) {
      return {
        left: box.left,
        top: box.top + box.height,
        width: box.width,
      };
    }

    return;
  };

  useLayoutEffect(() => {
    addEventListener('scroll', () => {
      const coords = getCoords();
      if (coords?.top) {
        coords.top = +coords.top + 40;
      }
      setCoords(coords);
    });
  }, []);

  useEffect(() => {
    if (!dropdownIsVisible) return;

    const coords = getCoords();
    setCoords(coords);
  }, [dropdownIsVisible]);

  return (
    <label className={`${style['select']} ${SFPro.className}`}>
      <span className={style['select__title']}>{label}</span>
      <div
        className={`${style['select__input']} ${dropdownIsVisible ? style['select__opened'] : ''}`}
        ref={inputEl}
        onClick={() => setDropdownVisible(!dropdownIsVisible)}
      >
        <p className={`${style['select__visual']}`}>{value?.text || placeholder}</p>
      </div>
      {dropdownIsVisible &&
        createPortal(
          <div className={style['select__dropdown']} style={getCoords()}>
            <div
                className={style['select__item']}
                onClick={() => {
                  setValue(undefined);
                  setDropdownVisible(false);
                  onChange(undefined);
                }}
              >
                Не выбрано
              </div>
            {values.map((item) => (
              <div
                className={style['select__item']}
                key={item.value}
                onClick={() => {
                  setValue(item);
                  setDropdownVisible(false);
                  onChange(item.value);
                }}
              >
                {item.text}
              </div>
            ))}
          </div>,
          document.getElementById('dropdowns-container')!
        )}
    </label>
  );
};

export default Select;
