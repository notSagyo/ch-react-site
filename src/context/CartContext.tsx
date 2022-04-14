import { createContext, useContext, useState } from 'react';
import { DivProps, iCartContext, iCartItem } from '../types';

const CartContext = createContext<iCartContext>({
	itemList: [],
	setItemList: () => void(0),
	addItem: () => void(0),
	removeItem: () => void(0),
	clearCart: () => void(0),
});

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children, ...props}: DivProps) {
	const [itemList, setItemList] = useState<iCartItem[]>([]);

	function addItem(item: iCartItem) {
		const foundItem = findItem(item.id);
		if (foundItem)
			foundItem.quantity += item.quantity;
		else
			setItemList([...itemList, item]);
		itemList.sort((a, b) => a.category.localeCompare(b.category));
	}

	function removeItem(id: number) {
		setItemList(itemList.filter(item => item.id !== id));
	}

	function clearCart() {
		setItemList([]);
	}

	function findItem(id: number) {
		return itemList.find(item => item.id === id);
	}

	return (
		<CartContext.Provider {...props} value={{
			itemList: itemList,
			setItemList: setItemList,
			addItem: addItem,
			removeItem: removeItem,
			clearCart: clearCart,
		}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
