import { Button, Group, Text, Title } from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../../components/AlertModal/AlertModal';
import { useCartContext } from '../../context/CartContext';
import { useUserContext } from '../../context/UserContext';
import { DivProps } from '../../types';
import { PRICING_URL } from '../../utils';
import useStyles from './Cart.styles';
import CartList from './CartList';
import CheckoutModal from './CheckoutModal';

function Cart({ children, ...props }: DivProps) {
	const cartContext = useCartContext();
	const [modalOpened, setModalOpened] = useState(false);
	const { authUser, signIn } = useUserContext();
	const { classes, cx } = useStyles();

	const handleCheckout = async () => {
		if (authUser) {
			setModalOpened(true);
		} else {
			const signedUser = await signIn();
			signedUser && setModalOpened(true);
		}
	};

	return (
		<div {...props} className={cx(props.className, classes.wrapper)}>
			<CheckoutModal opened={modalOpened} setOpened={setModalOpened}/>
			{children}
			{cartContext.itemList.length > 0 ?
				<>
					<CartList />
					<Button
						color={'brand'}
						className={classes.checkoutBtn}
						onClick={handleCheckout}
					>
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
						{`Try adding a plan to the cart and come back,
						we'll be waiting for you... :-)`}
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
