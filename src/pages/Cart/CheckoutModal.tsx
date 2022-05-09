import { useState } from 'react';
import { Modal, Button, Group, Text, LoadingOverlay, Stack } from '@mantine/core';
import { useCartContext } from '../../context/CartContext';
import { iOrder } from '../../types';
import { useUserContext } from '../../context/UserContext';

interface CheckoutModalProps {
	opened: boolean;
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

function CheckoutModal({ opened, setOpened }: CheckoutModalProps) {
	const [order, setOrder] = useState<iOrder>();
	const [loading, setLoading] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const { itemList, getTotal, createOrder, clearCart } = useCartContext();
	const { activeUser } = useUserContext();

	const products = itemList.map((item, index) => {
		return (
			<Group position='apart' key={index}>
				<div> {item.quantity} x {item.name} </div>
				<div> ${(item.price * item.quantity).toFixed(2)} </div>
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

		const createdOrder = await createOrder(newOrder);
		if (createdOrder) {
			clearCart();
			setConfirmed(true);
			setOrder(createdOrder);
		}
		setLoading(false);
	};

	return (
		<Modal
			centered
			opened={opened}
			title={<Text weight={600}>Your order</Text>}
			onClose={() => setOpened(false)}
			overlayBlur={0.75}
		>
			<LoadingOverlay visible={loading}/>
			<Stack align='stretch' mt={'lg'}>
				{confirmed ?
					<>
						<Text weight={600} underline>Details:</Text>
						<Group position='apart'>
							<div>Total:</div>
							<div>${order?.total}</div>
						</Group>
						<Group position='apart'>
							<div>Order ID:</div>
							<div>{order?.id}</div>
						</Group>
						<Group position='apart'>
							<div>Issue date:</div>
							<div>{order?.createdAt && new Date(order.createdAt).toUTCString()}</div>
						</Group>
						<Text weight={600} mt={'sm'} underline>To:</Text>
						<Group position='apart'>
							<div>Name:</div>
							<div>{order?.userName}</div>
						</Group>
						<Group position='apart'>
							<div>Mail:</div>
							<div>{order?.userEmail}</div>
						</Group>
						<Group position='apart'>
							<div>User ID:</div>
							<div>{order?.userId}</div>
						</Group>
						<Group position="center" mt={'sm'}>
							<Button color={'brand'} onClick={() => setOpened(false)}>
								Close
							</Button>
						</Group>
					</>
					:
					<>
						{products}
						<Group position='right'>
							<Text weight={600}>Total:</Text>
							<Text weight={600}>${getTotal().toFixed(2)}</Text>
						</Group>
						<Group position="center" mt={'lg'} onClick={handleConfirm}>
							<Button color={'brand'}>Confirm</Button>
						</Group>
					</>
				}
			</Stack>
		</Modal>
	);
}

export default CheckoutModal;
