import { ReactNode, useState } from 'react';
import { Burger, Group, Anchor } from '@mantine/core';
import { useScrollLock, useClickOutside } from '@mantine/hooks';
import { classList } from '../../utils';
import DropdownItem from './DropdownItem';
import style from './Navbar.module.scss';
import NotificationTooltip from '../NotificationTooltip/NotificationTooltip';

interface Props {
	logo?: ReactNode,
	className?: string
}

function Navbar({logo, className}: Props) {
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
		<div className={classList(style.navWrapper, className)} ref={navRef}>
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
					<div className={style.logo}>
						{logo}
					</div>
					<ul className={style.linkList}>
						<li>
							<NotificationTooltip>
								<Anchor className={style.link}>Go to App</Anchor>
							</NotificationTooltip>
						</li>
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
