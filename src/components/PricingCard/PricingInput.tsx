import { ActionIcon, Button, Group, NumberInput, NumberInputHandlers } from '@mantine/core';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'tabler-icons-react';
import { BASE_URL, CART_URL, DivProps } from '../../utils';
import useStyles from './PricingInput.styles';

interface QuantityInputProps extends DivProps {
	min?: number;
	max?: number;
	onValueChange: (value: number) => void;
}
function PricingInput({
	min = 0,
	max = 12,
	onValueChange,
	...props }: QuantityInputProps)
{
	const handlers = useRef<NumberInputHandlers>();
	const numberInput = useRef<HTMLInputElement>(null);
	const [quantity, setQuantity] = useState(1);
	const { classes, cx } = useStyles();

	return (
		<Group {...props} className={cx(classes.wrapper, props.className)}>
			<div className={classes.controlWrapper}>
				<ActionIcon<'button'>
					size={28}
					variant="transparent"
					onClick={() => handlers.current && handlers.current.decrement()}
					disabled={quantity === min}
					className={classes.control}
					onMouseDown={(event) => event.preventDefault()}
				>
					<Minus size={16} />
				</ActionIcon>

				<NumberInput
					variant="unstyled"
					min={min}
					max={max}
					handlersRef={handlers}
					value={quantity}
					ref={numberInput}
					onChange={(value) => {
						onValueChange && value && onValueChange(value);
						value && setQuantity(value);
					}}
					classNames={{ input: classes.input }}
				/>

				<ActionIcon<'button'>
					size={28}
					variant="transparent"
					onClick={() => handlers.current && handlers.current.increment()}
					disabled={quantity === max}
					className={classes.control}
					onMouseDown={(event) => event.preventDefault()}
				>
					<Plus size={16} />
				</ActionIcon>
			</div>
			<Link to={`${BASE_URL}/${CART_URL}`}>
				<Button className={classes.button}>{'Buy now >'}</Button>
			</Link>
		</Group>
	);
}

export default PricingInput;
