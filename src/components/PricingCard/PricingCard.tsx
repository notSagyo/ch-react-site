import { useEffect,  useRef, useState } from 'react';
import { ActionIcon, Button, Card, CardProps, Divider, Group, NumberInput, NumberInputHandlers, Text } from '@mantine/core';
import cn from 'classnames/bind';
import styles from './PricingCard.module.scss';
import { DivProps } from '../../utils';
import { Check } from 'tabler-icons-react';

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
	const [quantity, setQuantity] = useState(1);
	const [timeInterval, setTimeInterval] = useState<'month' | 'year'>('month');
	const handlers = useRef<NumberInputHandlers>();

	const features = cardFeatures.map((feat, index) =>
		<Text className={styles.feature} key={index}>
			<Check color='lightgreen'/>{feat}
		</Text>
	);

	useEffect(() => {
		if (quantity >= 12) {
			setTimeInterval('year');
			timeInterval === 'month' && setQuantity(1);
		}
		else if (quantity == 0 && timeInterval === 'year') {
			setTimeInterval('month');
			setQuantity(11);
		}
	}, [quantity]);

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
							{'$' + (timeInterval === 'month' ? cardPrice : cardPrice * 12)}
							<Text className={styles.priceInterval} component='span'> /{timeInterval}</Text>
						</> : 'Free'
					}
				</Text>

				<Group>
					<Group>
						<ActionIcon
							size={36}
							variant="default"
							onClick={() => handlers.current && handlers.current.decrement()}
						> – </ActionIcon>

						<NumberInput
							hideControls
							value={quantity}
							onChange={(val: number) => setQuantity(val)}
							handlersRef={handlers}
							min={0}
							step={1}
							styles={{ input: { width: 54, textAlign: 'center' } }}
						/>

						<ActionIcon
							size={36}
							variant="default"
							onClick={() => handlers.current && handlers.current.increment()}
						> + </ActionIcon>
					</Group>

					<Button>{'Buy now >'}</Button>
				</Group>
			</Group>
		</Card>
	);
}

export default PricingCard;
