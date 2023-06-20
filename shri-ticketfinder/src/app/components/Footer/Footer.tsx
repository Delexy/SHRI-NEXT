import Link from 'next/link';
import style from './style.module.scss';

const Footer = () => {
  return (
		<footer className={style.footer}>
			<nav className={`row align-center justify-between ${style['footer__nav']}`}>
				<Link href='/FAQ'>Вопросы-ответы</Link>
				<Link href='/about'>О нас</Link>
			</nav>
		</footer>
	);
}

export default Footer;
