import { Image, UnstyledButton, Menu, Text } from '@mantine/core';
import { classes } from '../utils';
import style from './Navbar.module.scss';
import logoUrl from '/img/logo.svg';

function Navbar() {
	return (
		<nav className={style.nav}>
			<Image
				className={style.logo}
				src={logoUrl}
				alt="logo image" />
			<ul className={style.links}>
				{/* OPEN APP BUTTON */}
				<li><UnstyledButton className={classes(style.link, style.cta)}>
					<Text inherit>Go to App</Text>
				</UnstyledButton></li>

				{/* PRICING BUTTON */}
				<li>
					<Menu
						className={style.menu}
						trigger='hover'
						delay={250}
						size={'sm'}
						control={
							<UnstyledButton className={style.link}>
								Pricing <i className='material-icons'>arrow_drop_down</i>
							</UnstyledButton>
						}
					>
						<Menu.Item icon={<i className={style.menuIcon}>favorite</i>}
							component={'a'} href='#!'> Free </Menu.Item>

						<Menu.Item icon={<i className={style.menuIcon}>star_rate</i>}
							component={'a'} href='#!'> Pro </Menu.Item>

						<Menu.Item icon={<i className={style.menuIcon}>hotel_class</i>}
							component={'a'} href='#!'> Pro+ </Menu.Item>
					</Menu>
				</li>

				{/* ABOUT BUTTON */}
				<li><UnstyledButton className={style.link}>About</UnstyledButton></li>
			</ul>
		</nav>
	);
}

export default Navbar;
