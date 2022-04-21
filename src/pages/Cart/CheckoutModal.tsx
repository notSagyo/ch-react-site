import { useEffect, useState } from 'react';
import { Modal, Button, Group, Text, Loader, LoadingOverlay } from '@mantine/core';
import { useCartContext } from '../../context/CartContext';
import { iOrder } from '../../types';
import { useUserContext } from '../../context/UserContext';

interface CheckoutModalProps {
	opened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function CheckoutModal({ opened, setOpened }: CheckoutModalProps) {
	const [loading, setLoading] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const { activeUser } = useUserContext();
	const { itemList, getTotal, createOrder, clearCart } = useCartContext();
	const [order, setOrder] = useState<iOrder>();

	useEffect(() => {
		if (opened) {
			console.log(itemList);
		}
	}, [opened]);

	const products = itemList.map((item) => {
		return (
			<Group position='apart'>
				<div>
					{item.quantity} x {item.name}
				</div>
				<div>
					${(item.price * item.quantity).toFixed(2)}
				</div>
			</Group>
		);
	});

	const handleConfirm = async () => {
		setLoading(true);
		const newOrder: iOrder = {
			products: itemList,
			total: getTotal(),
			userName: activeUser.name,
			userEmail: activeUser.email,
			userId: activeUser.id,
			createdAt: Date.now(),
		};

		setConfirmed(true);
		setOrder(newOrder);
		createOrder(newOrder)
			.then(() => clearCart())
			.finally(() => setLoading(false));

		// !TODO: !!!!! SHOW RECEIPT
	};

	useEffect(() => {
		console.log(order);
	}), [order];

	return (
		<Modal
			centered
			opened={opened}
			title={<Text weight={600}>Your order</Text>}
			onClose={() => setOpened(false)}
		>
			<LoadingOverlay visible={loading}/>
			<Group direction='column' align='stretch' mt={'lg'}>
				{products}
				<Group position='right'>
					<Text weight={600}>Total:</Text>
					<Text weight={600}>${getTotal().toFixed(2)}</Text>
				</Group>
				<Group position="center" mt={'lg'} onClick={handleConfirm}>
					<Button color={'brand'}>Confirm</Button>
				</Group>
			</Group>
		</Modal>
	);
}

export default CheckoutModal;
