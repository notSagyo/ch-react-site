import { ReactNode, useState } from 'react';
import { Burger, Group, Anchor } from '@mantine/core';
import { useScrollLock, useClickOutside } from '@mantine/hooks';
import cn from 'classnames/bind';
import NotificationTooltip from '../NotificationTooltip/NotificationTooltip';
import DropdownItem from './DropdownItem';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils';

interface Props {
	logo?: ReactNode,
	className?: string
}

// !TODO: Add home button while not in homepage
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
		<div className={cn(styles.navWrapper, className)} ref={navRef}>
			<Burger
				className={styles.burger}
				opened={isOpen}
				onClick={() => toggleNav()}
				title={burgerTitle}
			/>
			<nav
				className={cn(
					styles.nav,
					isOpen ? styles.open : '',
					logo ? styles.withLogo: ''
				)}
			>
				<Group className={styles.content}>
					<div className={styles.logo}>
						{logo}
					</div>
					<ul className={styles.linkList}>
						<li>
							<NotificationTooltip>
								<Anchor className={styles.link}>
									<Link to={`/${BASE_URL}/chat`}> Go to App </Link>
								</Anchor>
							</NotificationTooltip>
						</li>
						<li>
							<Link to={`/${BASE_URL}/pricing`}>
								<DropdownItem
									title='Pricing'
									items={[
										{content: 'Free', materialIcon: 'favorite'},
										{content: 'Pro', materialIcon: 'star_rate'},
										{content: 'Pro+', materialIcon: 'hotel_class'}
									]}
								/>
							</Link>
						</li>
						<li><Anchor className={styles.link}>About</Anchor></li>
					</ul>
				</Group>
			</nav>
		</div>
	);
}

export default Navbar;
