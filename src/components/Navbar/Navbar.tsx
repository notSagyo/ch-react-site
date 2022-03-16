import { useState } from 'react';
import { Burger, Group, Anchor, Image } from '@mantine/core';
import { classList } from '../../utils';
import DropdownItem from './DropdownItem';
import style from './Navbar.module.scss';
import logoUrl from '/img/logo.svg';

function Navbar() {
	const [opened, setOpened] = useState(false);
	const title = opened ? 'Close navigation' : 'Open navigation';

	return (
		<nav className={classList( style.nav, opened ? style.open : '' )}>
			<div className={classList(style.navTop, style.hideSmUp)}>
				<Burger
					opened={opened}
					onClick={() => 	setOpened((o) => !o)}
					title={title}
				/>
			</div>

			<Group className={style.content}>
				<Image
					className={classList(style.logo)}
					src={logoUrl}
					alt="logo image"
					width='auto'
					height=''
				/>

				<ul className={style.linkList}>
					<li><Anchor className={style.link}>Go to App</Anchor></li>
					<li>
						<DropdownItem
							title='Pricing'
							items={[
								{content: 'Free', materialIcon: 'favorite'},
								{content: 'Pro', materialIcon: 'star_rate'},
								{content: 'Pro+', materialIcon: 'hotel_class'}
							]}
						/>
					</li>
					<li><Anchor className={style.link}>About</Anchor></li>
				</ul>
			</Group>
		</nav>
	);
}

export default Navbar;
