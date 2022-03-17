import { useState } from 'react';
import { Burger, Group, Anchor } from '@mantine/core';
import { useScrollLock, useClickOutside } from '@mantine/hooks';
import { classList } from '../../utils';
import DropdownItem from './DropdownItem';
import style from './Navbar.module.scss';

type Props = {
	logo?: string;
}

function Navbar({logo = ''}: Props) {
	const [isOpen, setOpened] = useState(false);
	const [      , setScrollLocked] = useScrollLock();
	const navRef = useClickOutside(() => closeNav());
	const burgerTitle = isOpen ? 'Close navigation' : 'Open navigation';

	function toggleNav() {
		setScrollLocked((c) => !c);
		setOpened((o) => !o);
	}

	function closeNav() { isOpen && toggleNav(); }

	return (
		<div ref={navRef}>
			<Burger
				className={style.burger}
				opened={isOpen}
				onClick={() => toggleNav()}
				title={burgerTitle}
			/>
			<nav
				className={classList(
					style.nav,
					isOpen ? style.open : '',
					logo ? style.withLogo: ''
				)}
			>
				<Group className={style.content}>
					{logo
						? <img className={style.logo} src={logo} alt="logo image" />
						: <div></div>}
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
		</div>
	);
}

export default Navbar;
