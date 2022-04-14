import { ActionIcon, Button, Group, NumberInput, NumberInputHandlers } from '@mantine/core';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus } from 'tabler-icons-react';
import { useCartContext } from '../../context/CartContext';
import { DivProps, iProduct } from '../../types';
import { CART_URL } from '../../utils';
import useStyles from './PricingInput.styles';

interface QuantityInputProps extends DivProps {
	product?: iProduct;
	min?: number;
	max?: number;
	inputStyles?: React.CSSProperties;
	buttonLabel?: string;
	buttonLink?: string;
	onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onValueChange?: (value: number) => void;
}

function PricingInput({
	product,
	min = 1,
	max = 999,
	buttonLabel = 'Buy now >',
	buttonLink = `/${CART_URL}`,
	onButtonClick,
	inputStyles,
	onValueChange,
	...props }: QuantityInputProps)
{
	const [quantity, setQuantity] = useState(1);
	const cartContext = useCartContext();
	const handlers = useRef<NumberInputHandlers>();
	const numberInput = useRef<HTMLInputElement>(null);
	const { classes, cx } = useStyles();

	function handleClick() {
		if (!product)
			return;

		cartContext.addItem({...product, quantity: quantity});
	}

	return (
		<Group {...props} className={cx(classes.wrapper, props.className)}>
			<div className={classes.controlWrapper} style={inputStyles}>
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
			<Link to={buttonLink}>
				<Button
					color={'brand'}
					className={classes.button}
					onClick={onButtonClick || handleClick}
				>
					{buttonLabel}
				</Button>
			</Link>
		</Group>
	);
}

export default PricingInput;
