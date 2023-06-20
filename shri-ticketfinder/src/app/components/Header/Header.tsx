import Link from 'next/link';
import style from './style.module.scss';

const Footer = () => {
  return (
		<header className={`row justify-between align-center ${style.header}`}>
			<Link href='/' className={style['header__logo']}>Билетопоиск</Link>
			<Link href='/cart' className={style['header__cart']}></Link>
		</header>
	);
}

export default Footer;
