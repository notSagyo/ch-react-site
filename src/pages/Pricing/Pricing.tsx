import cn from 'classnames';
import PricingCard from '../../components/PricingCard/PricingCard';
import { DivProps } from '../../utils';
import styles from './Pricing.module.scss';
import productsJSON from '../../data/products.json';

function Pricing(props: DivProps) {
	const pricingCards = (
		productsJSON.map((product, index) => (
			<PricingCard key={index} product={{...product}} />
		))
	);


	return (
		<section {...props} className={cn(props.className, styles.pricing)}>
			{pricingCards}
		</section>
	);
}

export default Pricing;
