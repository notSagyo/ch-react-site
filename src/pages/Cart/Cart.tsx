import { DivProps } from '../../types';
import CartList from './CartList';

function Cart({ children, ...props }: DivProps) {
	return (
		<div {...props}>
			{children}
			<CartList />
		</div>
	);
}

export default Cart;
