import { Menu, Anchor } from '@mantine/core';
import style from './DropdownItem.module.scss';

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
			icon={item.materialIcon
				? <i className={style.menuItemIcon}> {item.materialIcon} </i> : ''}
			component={'a'} href={item.href || '#!'}
		>
			{item.content}
		</Menu.Item>
	));

	const listItems = items.map((item, index) => (
		<li key={index}>
			{item.materialIcon
				? <i className='material-icons'> {item.materialIcon} </i> : ''}
			<Anchor className={style.link}>
				{item.content || '#!'}
			</Anchor>
		</li>
	));

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
				{menuItems}
			</Menu>

			{/* MOBILE: STATIC LIST */}
			<div className={style.itemListContainer}>
				<Anchor className={style.link}>{title}</Anchor>
				<ul className={style.itemList}>
					{listItems}
				</ul>
			</div>
		</>
	);
}

export default DropdownItem;
