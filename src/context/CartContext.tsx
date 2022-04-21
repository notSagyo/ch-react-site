import { createContext, useContext, useState } from 'react';
import { DivProps, iCartContext, iCartItem, iOrder, iProduct } from '../types';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebaseConfig';

const CartContext = createContext<iCartContext | Record<string, never>>({});
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children, ...props}: DivProps) {
	const [itemList, setItemList] = useState<iCartItem[]>([]);

	async function addItem(item: iCartItem) {
		const foundItem = findItem(item.id);
		if (foundItem)
			foundItem.quantity += item.quantity;
		else
			setItemList([...itemList, item]);
		itemList.sort((a, b) => a.category.localeCompare(b.category));
	}

	async function removeItem(id: string) {
		setItemList(itemList.filter(item => item.id !== id));
	}

	async function clearCart() {
		setItemList([]);
	}

	function getTotal() {
		return itemList.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}

	function findItem(id: string) {
		return itemList.find(item => item.id === id);
	}

	async function createOrder(order: iOrder) {
		const docRef = await addDoc(collection(db, 'orders'), order);
		console.log('Created order: ', docRef);
		return {id: docRef.id, ...order};
	}

	const productToCartItem = (product: iProduct, quantity: number) => {
		const { description, features, ...cartItem} = product;
		return { ...cartItem, quantity };
	};

	return (
		<CartContext.Provider {...props} value={{
			itemList: itemList,
			setItemList: setItemList,
			addItem: addItem,
			removeItem: removeItem,
			clearCart: clearCart,
			getTotal: getTotal,
			createOrder: createOrder,
			productToCartItem: productToCartItem,
		}}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
