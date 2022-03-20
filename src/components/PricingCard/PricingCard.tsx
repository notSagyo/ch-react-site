import { useRef, useState } from 'react';
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
		cardPrice: string,
	}

function PricingCard({
	cardTitle,
	cardDescription,
	cardFeatures,
	cardPrice,
	...props}: Props)
{
	const [value, setValue] = useState(1);
	const handlers = useRef<NumberInputHandlers>();

	const features = cardFeatures.map((feat) =>
		<Text className={styles.feature}><Check color='lightgreen'/>{feat}</Text>
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
					{cardPrice}
					<Text className={styles.priceInterval} component='span'> /month</Text>
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
							value={value}
							onChange={(val: number) => setValue(val)}
							handlersRef={handlers}
							max={10}
							min={1}
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
