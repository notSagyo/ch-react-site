import { Image, UnstyledButton } from '@mantine/core';
import '/src/styles/main.scss';
import style from './navbar.module.scss';
import logoUrl from '/img/logo.svg';

function Navbar() {
	return (
		<nav className={style.nav}>
			<Image
				className={style.logo}
				src={logoUrl}
				alt="logo image" />
			<ul className={style.links}>
				<li><UnstyledButton className={style.link}>Open App</UnstyledButton></li>
				<li><UnstyledButton className={style.link}>Pricing</UnstyledButton></li>
				<li><UnstyledButton className={style.link}>About</UnstyledButton></li>
			</ul>
		</nav>
	);
}

export default Navbar;
