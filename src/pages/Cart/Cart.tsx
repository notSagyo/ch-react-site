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
				<>
					<CartList />
					<Button color={'brand'} className={classes.checkoutBtn}>
						{'Checkout >'}
					</Button>
					<Text className={classes.smallText}>
						*if multiple plans are selected, they will be queued using the most
						expensive first.
					</Text>
				</>
				:
				<Group
					position='center'
					direction='column'
					spacing={'xl'}
					className={classes.emptyCartWrapper}
				>
					<Title>The cart is empty...</Title>
					<Text className={classes.emptyDescription}>
						Try adding a plan to the cart and come back,
						we'll be waiting for you... :-)
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
