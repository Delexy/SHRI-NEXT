'use client';

import { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction, createContext, useCallback, useContext, useState } from 'react';
import style from './style.module.scss';

type TGroup = {
  title: string;
};

type TItem = {
  text: string;
};

type TContext = {
  activeTab?: string;
  switchTab?: (title: string) => void;
};

type TState = {
  activeTab: string | undefined;
};

const AccodionContext = createContext<TContext>({});

const Accordion: FC<PropsWithChildren> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  const switchTab = useCallback((title: string) => {
    setActiveTab((activeTab) => (activeTab === title ? undefined : title));
  }, []);

  return (
    <AccodionContext.Provider value={{ activeTab, switchTab }}>
      <div className={style['accordion']}>{children}</div>
    </AccodionContext.Provider>
  );
};

const AccodrionGroup: FC<PropsWithChildren<TGroup>> = ({ children, title }) => {
  const { activeTab, switchTab } = useContext(AccodionContext);

  return (
    <div className={`${style['accordion_el']} content-wrapper`}>
      <div
        className={`${style['accordion__info']} row justify-between ${activeTab === title ? style['accordion__info_opened'] : ''}`}
        onClick={() => switchTab!(title)}
      >
        <p className={style['accordion__title']}>{title}</p>
        <button className={style['accordion__btn']}></button>
      </div>
      {activeTab === title && <div className={style['accordion__text']}>{children}</div>}
    </div>
  );
};

const AccordionItem: FC<PropsWithChildren<TItem>> = ({ children, text }) => {
  return <>{text}</>;
};

export { Accordion, AccordionItem, AccodrionGroup };
