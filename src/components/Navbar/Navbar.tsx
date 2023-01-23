import { Burger, Group } from '@mantine/core';
import { useClickOutside, useScrollLock } from '@mantine/hooks';
import cn from 'classnames';
import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, TO_DETAILS_URL } from '../../utils';
import NotificationTooltip from '../NotificationTooltip/NotificationTooltip';
import DropdownItem from './DropdownItem';
import styles from './Navbar.module.scss';

interface Props {
	logo?: ReactNode,
	className?: string
}

// TODO: Remove nested anchors
function Navbar({logo, className}: Props) {
	const [isOpen, setOpened] = useState(false);
	const [, setScrollLocked] = useScrollLock();
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
				onClick={() => closeNav()}
			>
				<Group className={styles.content}>
					{logo ?
						<div className={styles.logo}>
							{logo}
						</div>
						:
						// Empty div to keep flex structure
						<div style={{visibility: 'hidden', margin: -9}} />
					}
					<ul className={styles.linkList}>
						<li>
							{/* TODO: Make the notifications work in real time! */}
							<NotificationTooltip>
								<Link className={styles.link} to={`/${BASE_URL}/chat`}> Go to App </Link>
							</NotificationTooltip>
						</li>
						<li>
							<Link to={`/${BASE_URL}/pricing`}>
								<DropdownItem
									title='Pricing'
									items={[
										{content: 'Free', materialIcon: 'favorite', link: `${TO_DETAILS_URL('personal', '0')}`},
										{content: 'Pro', materialIcon: 'star_rate', link: `${TO_DETAILS_URL('personal', '1')}`},
										{content: 'Pro+', materialIcon: 'hotel_class', link: `${TO_DETAILS_URL('personal', '2')}`}
									]}
								/>
							</Link>
						</li>
						<li><div className={styles.link}>About</div></li>
					</ul>
				</Group>
			</nav>
		</div>
	);
}

export default Navbar;
