import { useCartContext } from '../../context/CartContext';
import { DivProps } from '../../types';

function Cart({ children, ...props }: DivProps) {
	const cartContext = useCartContext();

	const cartItems = cartContext.itemList.map(item => (
		<div key={item.id}>
			{item.name} ({item.quantity} months)
		</div>
	));

	return (
		<div {...props}>
			{children}
			{cartItems}
		</div>
	);
}

export default Cart;
