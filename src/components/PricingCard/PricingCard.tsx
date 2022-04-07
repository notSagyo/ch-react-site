import { useState } from 'react';
import { Card, CardProps, Divider, Group, Text } from '@mantine/core';
import cn from 'classnames/bind';
import styles from './PricingCard.module.scss';
import { DivProps } from '../../utils';
import { Check } from 'tabler-icons-react';
import PricingCardInput from './PricingCardInput';

type Props =
	& Partial<CardProps<'div'>>
	& DivProps
	& {
		cardTitle: string,
		cardDescription: string,
		cardFeatures: string[],
		cardPrice: number,
	}

function PricingCard({
	cardTitle,
	cardDescription,
	cardFeatures,
	cardPrice,
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
				<Text className={styles.price}>
					{cardPrice > 0 ?
						<>
							${(cardPrice * quantity).toFixed(2)}
							<Text className={styles.priceMuted} component='span'> (${cardPrice}/month)</Text>
						</> : ''
					}
				</Text>

				{cardPrice > 0 && (
					<Group>
						<PricingCardInput
							min={1}
							max={999}
							onChange={onChange}
						/>
					</Group>
				)}
			</Group>
		</Card>
	);
}

export default PricingCard;
