import cn from 'classnames';
import PricingCard from '../../components/PricingCard/PricingCard';
import { DivProps } from '../../utils';
import styles from './Pricing.module.scss';

function Pricing(props: DivProps) {
	return (
		<section {...props} className={cn(props.className, styles.pricing)}>
			<PricingCard
				cardTitle='Free'
				cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna.'
				cardFeatures={['Is free', 'Costs no money', 'Free x 100 = Free']}
				cardPrice='FREE'
			/>
			<PricingCard
				cardTitle='Pro'
				cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus.'
				cardFeatures={['Has good stuff', 'Stuff is good', 'You\'re a good person']}
				cardPrice='$9.99*'
			/>
			<PricingCard
				cardTitle='Pro+'
				cardDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu odio congue, egestas est ac, eleifend urna. Aenean scelerisque luctus faucibus. Integer rutrum tellus in eros efficitur.'
				cardFeatures={['Goated', 'Best stuff no cap', 'Walks your dog', 'Loved by Jennifer Aniston']}
				cardPrice='$19.99*'
			/>
		</section>
	);
}

export default Pricing;
