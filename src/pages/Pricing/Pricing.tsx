import cn from 'classnames';
import PricingCard from '../../components/PricingCard/PricingCard';
import { DivProps, iProduct } from '../../types';
import styles from './Pricing.module.scss';
import { Group, Text } from '@mantine/core';
import { useShopContext } from '../../context/ShopContext';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Pricing(props: DivProps) {
	const [pricingCards, setPricingCards] = useState<JSX.Element[]>([]);
	const { getProducts, getProductsByCategory } = useShopContext();
	const { productCategory } = useParams();

	const mapProdsToCards = (prods: iProduct[]) => {
		const categories: {[key: string]: JSX.Element[]} = {};
		const newPricingCards: JSX.Element[] = [];

		prods.map((product: iProduct, index) => {
			!categories[product.category] && (categories[product.category] = []);
			categories[product.category].push(<PricingCard key={index} product={{...product}} />);
		});

		for (const category in categories) {
			newPricingCards.push(
				<Group key={newPricingCards.length + 1}>
					<div className={styles.categoryTitle}>
						<Text className={styles.categoryTitle}>
							{category}
						</Text>
					</div>
					<div className={styles.cardsWrapper}>
						{categories[category]}
					</div>
				</Group>
			);
		}

		setPricingCards(newPricingCards);
	};

	useEffect(() => {
		if (productCategory) {
			getProductsByCategory(productCategory)
				.then((prods) => prods && mapProdsToCards(prods));
		} else {
			getProducts().then(mapProdsToCards);
		}
	}, []);

	getProducts();

	return (
		<section {...props} className={cn(props.className, styles.pricing)}>
			{pricingCards}
		</section>
	);
}

export default Pricing;
