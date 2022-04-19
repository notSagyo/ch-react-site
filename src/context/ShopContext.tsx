import { createContext, useContext } from 'react';
import { HTMLElementProps, iProduct, iShopContext } from '../types';
import CartContextProvider from './CartContext';
import { doc, setDoc, getDocs, collection, getDoc } from '@firebase/firestore';
import { db } from '../firebaseConfig';

const ShopContext = createContext<iShopContext | Record<string, never>>({});
export const useShopContext = () => useContext(ShopContext);

function ShopContextProvider({children, ...props}: HTMLElementProps) {
	const getProduct = async (id: string) => {
		const productDoc = await getDoc(doc(db, 'products', id));
		const product = productDoc.data() as iProduct;
		return product;
	};

	const getProducts = async () => {
		const productsRef = collection(db, 'products');
		const productsSnap = await getDocs(productsRef);
		const products = productsSnap.docs.map((doc) => doc.data() as iProduct);
		return products;
	};

	const getProductsByCategory = async (category: string) => {
		// TODO: Implement
		console.log('getProducts not implemented');
		return [];
	};

	const setProduct = async (product: iProduct) => {
		setDoc(doc(db, 'products', product.id), product);
		return;
	};

	return (
		<ShopContext.Provider {...props} value={{
			getProducts: getProducts,
			getProduct: getProduct,
			getProductsByCategory: getProductsByCategory,
			setProduct: setProduct,
		}}>
			<CartContextProvider>
				{children}
			</CartContextProvider>
		</ShopContext.Provider>
	);
}

export default ShopContextProvider;
