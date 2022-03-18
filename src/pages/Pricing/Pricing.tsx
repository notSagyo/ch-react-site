import { Container } from '@mantine/core';
import PricingCard from '../../components/PricingCard/PricingCard';
import style from './Pricing.module.scss';

function Pricing() {
	return (
		<Container>
			<PricingCard />
			<PricingCard />
			<PricingCard />
		</Container>
	);
}

export default Pricing;
