import { Menu, Anchor } from '@mantine/core';
import styles from './DropdownItem.module.scss';

// Bruh, lo que costó este component, TypeScript te odio :(
type Props = {
	title: string,
	items: {
		content: string,
		href?: string,
		materialIcon?: string,
	}[]
}

function DropdownItem({ title, items }: Props) {
	// Dropdowm menu for desktop / Static item list for mobile
	const menuItems = items.map((item, index) => (
		<Menu.Item
			key={index}
			icon={item.materialIcon ?
				<i className={styles.menuItemIcon}> {item.materialIcon} </i> : ''
			}
			component={'a'} href={item.href || '#!'}
		>
			{item.content}
		</Menu.Item>
	));

	const listItems = items.map((item, index) => (
		<li key={index}>
			{item.materialIcon ?
				<i className='material-icons'> {item.materialIcon} </i> : ''
			}
			<Anchor className={styles.link}>
				{item.content || '#!'}
			</Anchor>
		</li>
	));

	return (
		<>
			{/* DESKTOP: DROPDOWN MENU */}
			<Menu
				className={styles.dropDownMenu}
				trigger='hover'
				delay={250}
				size={'sm'}
				control={
					<Anchor className={styles.link}>
						{title} <i className='material-icons'>arrow_drop_down</i>
					</Anchor>
				}
			>
				{menuItems}
			</Menu>

			{/* MOBILE: STATIC LIST */}
			<div className={styles.itemListContainer}>
				<Anchor className={styles.link}>{title}</Anchor>
				<ul className={styles.itemList}>
					{listItems}
				</ul>
			</div>
		</>
	);
}

export default DropdownItem;
