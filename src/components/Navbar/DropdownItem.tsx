import { ReactElement } from 'react';
import { Menu, Anchor } from '@mantine/core';
import style from './DropdownItem.module.scss';

// Bruh, lo que costó este component, TypeScript te odio :(
interface Props {
	title: string,
	items: {
		content: string,
		href?: string,
		materialIcon?: string,
	}[]
}

function DropdownItem({ title, items }: Props) {
	// Dropdowm menu for desktop / Static item list for mobile
	const MENU_ITEMS: ReactElement[] = [];
	const LIST_ITEMS: ReactElement[] = [];

	items.forEach((item) => {
		MENU_ITEMS.push(
			<Menu.Item
				icon={item.materialIcon
					? <i className={style.menuItemIcon}>{item.materialIcon}</i>
					: ''
				}
				component={'a'} href={item.href || '#!'}
			>
				{item.content}
			</Menu.Item>
		);

		LIST_ITEMS.push(
			<li>
				{item.materialIcon
					? <i className='material-icons'> {item.materialIcon} </i>
					: ''
				}
				<Anchor className={style.link}>
					{item.content || '#!'}
				</Anchor>
			</li>
		);
	});

	return (
		<>
			{/* DESKTOP: DROPDOWN MENU */}
			<Menu
				className={style.dropDownMenu}
				trigger='hover'
				delay={250}
				size={'sm'}
				control={
					<Anchor className={style.link}>
						{title} <i className='material-icons'>arrow_drop_down</i>
					</Anchor>
				}
			>
				{MENU_ITEMS}
			</Menu>

			{/* MOBILE: STATIC LIST */}
			<li className={style.pricingList}>
				<Anchor className={style.link}>{title}</Anchor>
				<ul>
					{LIST_ITEMS}
				</ul>
			</li>
		</>
	);
}

export default DropdownItem;
