import { Text } from '@mantine/core';
import useStyles from './Pricetag.styles';

interface PricetagProps {
	price: number;
	quantity: number;
}

function Pricetag({ price, quantity }: PricetagProps) {
	const { classes, cx } = useStyles();

	return (
		<Text className={classes.pricetag} weight={600}>
			{price > 0 ?
				<>
				${(price * quantity).toFixed(2)}
					<Text component='span' color={'dimmed'}> (${price}/month)</Text>
				</> : ''
			}
		</Text>
	);
}

export default Pricetag;
