import cn from 'classnames';
import PricingCard from '../../components/PricingCard/PricingCard';
import { DivProps, iProduct } from '../../types';
import styles from './Pricing.module.scss';
import { Group, Text } from '@mantine/core';
import { useShopContext } from '../../context/ShopContext';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils';

function Pricing(props: DivProps) {
	const [pricingCards, setPricingCards] = useState<JSX.Element[]>([]);
	const { getProducts, getProductsByCategory } = useShopContext();
	const { productCategory } = useParams();
	const navigate = useNavigate();

	const mapProdsToCards = (prods: iProduct[]) => {
		const categories: {[key: string]: JSX.Element[]} = {};
		const newPricingCards: JSX.Element[] = [];

		prods.map((product: iProduct, index) => {
			!categories[product.category] && (categories[product.category] = []);
			categories[product.category].push(<PricingCard key={index} product={{...product}} />);
		});

		for (const category in categories) {
			newPricingCards.push(
				<Group key={newPricingCards.length}>
					<div className={styles.categoryTitleWrapper}>
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
				.then((prods) => (prods && prods?.length > 0)
					? mapProdsToCards(prods)
					: navigate(`/${BASE_URL}/404`));
		} else {
			getProducts().then(mapProdsToCards);
		}
	}, []);

	return (
		<section {...props} className={cn(props.className, styles.pricing)}>
			{pricingCards}
		</section>
	);
}

export default Pricing;
