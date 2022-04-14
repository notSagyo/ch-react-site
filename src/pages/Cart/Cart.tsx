import { Button, Group, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { DivProps } from '../../types';
import { PRICING_URL } from '../../utils';
import useStyles from './Cart.styles';
import CartList from './CartList';

function Cart({ children, ...props }: DivProps) {
	const cartContext = useCartContext();
	const { classes, cx } = useStyles();

	return (
		<div {...props} className={cx(props.className, classes.wrapper)}>
			{children}
			{cartContext.itemList.length > 0 ?
				<CartList />
				:
				<Group position='center' direction='column' spacing={'xl'}>
					<Title>The cart is empty...</Title>
					<Text className={classes.emptyDescription}>
						Try adding a plan to the cart and come back, we will be waiting for you :)
					</Text>
					<Link to={`/${PRICING_URL}`}>
						<Button color={'brand'}>{'Go back to pricing >'}</Button>
					</Link>
				</Group>
			}
		</div>
	);
}

export default Cart;
