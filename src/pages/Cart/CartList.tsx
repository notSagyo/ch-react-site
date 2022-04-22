
import { Badge, Table, Group, Text, ActionIcon, ScrollArea, ScrollAreaProps } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Trash } from 'tabler-icons-react';
import { useCartContext } from '../../context/CartContext';
import { TO_DETAILS_URL } from '../../utils';
import useStyles from './CartList.styles';

const categoryColors: Record<string, string> = {
	personal: 'red',
	education: 'green',
};

function CartList(props: ScrollAreaProps) {
	const cartContext = useCartContext();
	const { classes, cx } = useStyles();

	const rows = cartContext.itemList.map((item) => (
		<tr key={item.name}>
			{/* Item */}
			<td>
				<Group spacing='sm'>
					<Link to={TO_DETAILS_URL(item.category, String(item.id))}>
						<Text size='sm' weight={500}>
							{item.name}
						</Text>
					</Link>
					<Badge
						color={categoryColors[item.category.toLowerCase()]}
						variant={'light'}
					>
						{item.category}
					</Badge>
				</Group>
			</td>
			{/* Price */}
			<td>
				<Text size='sm'>
					${item.price}
				</Text>
			</td>
			{/* Quantity */}
			<td>
				<Text<'a'> size='sm'>
					{item.quantity}
				</Text>
			</td>

			{/* Total */}
			<td>
				<Text size='sm' color='gray'>
					${(item.price * item.quantity).toFixed(2)}
				</Text>
			</td>
			<td>
				<Group spacing={0} position='right'>
					<ActionIcon variant='filled'color='red' onClick={() => cartContext.removeItem(item.id)}>
						<Trash size={16} />
					</ActionIcon>
				</Group>
			</td>
		</tr>
	));

	return (
		<ScrollArea>
			<Table {...props} verticalSpacing='sm' className={cx(classes.table, props.className)}>
				<thead>
					<tr>
						<th>Item</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
						<th />
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	);
}

export default CartList;
