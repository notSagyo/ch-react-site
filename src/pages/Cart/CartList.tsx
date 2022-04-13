
import { Badge, Table, Group, Text, ActionIcon, ScrollArea, useMantineTheme, ScrollAreaProps } from '@mantine/core';
import { Trash } from 'tabler-icons-react';
import { useCartContext } from '../../context/CartContext';

const jobColors: Record<string, string> = {
	personal: 'red',
	education: 'green',
};

function CartList(props: ScrollAreaProps) {
	const cartContext = useCartContext();
	const theme = useMantineTheme();

	const rows = cartContext.itemList.map((item) => (
		<tr key={item.name}>
			{/* Item */}
			<td>
				<Group spacing="sm">
					<Text size="sm" weight={500}>
						{item.name}
					</Text>
					<Badge
						color={jobColors[item.category.toLowerCase()]}
						variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
					>
						{item.category}
					</Badge>
				</Group>
			</td>
			{/* Price */}
			<td>
				<Text size="sm">
					${item.price}
				</Text>
			</td>
			{/* Quantity */}
			<td>
				<Text<'a'> size="sm">
					{item.quantity}
				</Text>
			</td>

			{/* Total */}
			<td>
				<Text size="sm" color="gray">
					${(item.price * item.quantity).toFixed(2)}
				</Text>
			</td>
			<td>
				<Group spacing={0} position="right">
					<ActionIcon color="red" onClick={() => cartContext.removeItem(item.id)}>
						<Trash size={16} />
					</ActionIcon>
				</Group>
			</td>
		</tr>
	));

	return (
		<ScrollArea {...props}>
			<Table sx={{ minWidth: 800 }} verticalSpacing="sm">
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
