import cn from 'classnames';
import PricingCard from '../../components/PricingCard/PricingCard';
import { DivProps } from '../../types';
import styles from './Pricing.module.scss';
import productsJSON from '../../data/products.json';
import { Group, Text } from '@mantine/core';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../firebaseConfig';

function Pricing(props: DivProps) {
	const categories: {[key: string]: JSX.Element[]} = {};

	productsJSON.map((product, index) => {
		!categories[product.category] && (categories[product.category] = []);
		categories[product.category].push(<PricingCard key={index} product={{...product}} />);
	});

	const pricingCards = [];
	for (const category in categories) {
		pricingCards.push(
			<Group key={pricingCards.length + 1}>
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

	return (
		<section {...props} className={cn(props.className, styles.pricing)}>
			{pricingCards}
		</section>
	);
}

export default Pricing;
