import Filter from './components/Filter/Filter';
import Listing from './components/Listing/Listing';

import style from './style.module.scss';

export const Home = () => {
  return (
    <div className={style['main-page']}>
      <Filter></Filter>
      <Listing></Listing>
    </div>
  );
};

export default Home;
