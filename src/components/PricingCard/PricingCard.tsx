import { useState } from 'react';
import { Card, CardProps, Divider, Group, Text } from '@mantine/core';
import cn from 'classnames/bind';
import styles from './PricingCard.module.scss';
import { TO_DETAILS_URL } from '../../utils';
import { Check } from 'tabler-icons-react';
import PricingInput from './PricingInput';
import { DivProps, iProduct } from '../../types';
import Pricetag from './Pricetag';
import { Link } from 'react-router-dom';

type Props =
	& Partial<CardProps<'div'>>
	& DivProps
	& {
		product: iProduct,
		cardTitle?: string,
		cardDescription?: string,
		cardFeatures?: string[],
		cardPrice?: number,
	}

function PricingCard({
	product,
	cardTitle = product.name,
	cardDescription = product.description,
	cardFeatures = product.features.map(feature => feature.name),
	cardPrice = product.price,
	...props}: Props)
{
	const [quantity, setQuantity] = useState<number>(1);

	const features = cardFeatures.map((feat, index) =>
		<Text className={styles.feature} key={index}>
			<Check color='lightgreen'/>{feat}
		</Text>
	);

	return (
		<Card {...props} className={cn(props.className, styles.card)}>
			<Group className={styles.contentWrapper}>
				<Link to={`${TO_DETAILS_URL(product.category, String(product.id))}`}>
					<Text className={styles.title}>{cardTitle}</Text>
				</Link>
				<Divider className={styles.divider} />
				<Text component={'p'}> {cardDescription} </Text>
				<Group className={styles.features}>
					{features}
				</Group>
				<Divider className={styles.divider} />
				<Pricetag price={cardPrice} quantity={quantity}/>
				<Group>
					<PricingInput
						product={product}
						onValueChange={setQuantity}
						buttonLabel={cardPrice == 0 ? 'Get it now >' : undefined}
						inputStyles={cardPrice == 0 ? {display: 'none'} : undefined}
					/>
				</Group>
			</Group>
		</Card>
	);
}

export default PricingCard;
