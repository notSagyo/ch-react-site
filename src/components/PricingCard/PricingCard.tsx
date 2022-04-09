import { useState } from 'react';
import { Card, CardProps, Divider, Group, Text } from '@mantine/core';
import cn from 'classnames/bind';
import styles from './PricingCard.module.scss';
import { DivProps } from '../../utils';
import { Check } from 'tabler-icons-react';
import PricingInput from './PricingInput';
import { iProduct } from '../../types';
import Pricetag from './Pricetag';

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

	function onChange(qty: number) {
		console.log('Quantity changed!');
		setQuantity(qty);
	}

	const features = cardFeatures.map((feat, index) =>
		<Text className={styles.feature} key={index}>
			<Check color='lightgreen'/>{feat}
		</Text>
	);

	return (
		<Card {...props} className={cn(props.className, styles.card)}>
			<Group className={styles.contentWrapper}>
				<Text className={styles.title}>{cardTitle}</Text>
				<Divider className={styles.divider} />
				<Text
					className={styles.description}
					component={'p'}> {cardDescription} </Text>
				<Group className={styles.features}>
					{features}
				</Group>
				<Divider className={styles.divider} />
				<Pricetag price={cardPrice} quantity={quantity}/>
				{cardPrice > 0 && (
					<Group>
						<PricingInput
							min={1}
							max={999}
							onValueChange={onChange}
						/>
					</Group>
				)}
			</Group>
		</Card>
	);
}

export default PricingCard;
