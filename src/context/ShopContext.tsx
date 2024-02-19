import { collection, doc, getDoc, getDocFromCache, getDocs, query, setDoc, where } from 'firebase/firestore';
import { createContext, useContext } from 'react';
import { db } from '../firebaseConfig';
import { HTMLElementProps, iProduct, iShopContext } from '../types';
import CartContextProvider from './CartContext';

const ShopContext = createContext<iShopContext | Record<string, never>>({});
export const useShopContext = () => useContext(ShopContext);

function ShopContextProvider({children, ...props}: HTMLElementProps) {
	const getProduct = async (id: string) => {
		const productRef = doc(db, 'products', id);

		let productDoc = await getDocFromCache(productRef)
			.catch(() => console.warn(`(Firestore): product '${id}' not found in cache`));
		if (!productDoc)
			productDoc = await getDoc(productRef);

		const product = productDoc.data() as iProduct;
		return product;
	};

	const getProducts = async () => {
		const productsSnap = await getDocs(collection(db, 'products'));
		const products = productsSnap.docs.map((doc) => doc.data() as iProduct);
		return products;
	};

	const getProductsByCategory = async (category: string) => {
		const q = query(collection(db, 'products'), where('category', '==', category));
		const productsSnap = await getDocs(q);
		const products = productsSnap.docs.map((doc) => doc.data() as iProduct);
		return products;
	};

	const setProduct = async (product: iProduct) => {
		await setDoc(doc(db, 'products', product.id), product);
		return product;
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
