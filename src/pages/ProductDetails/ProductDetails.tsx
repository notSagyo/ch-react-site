import { Title, SimpleGrid, Text, ThemeIcon, Grid, Col } from '@mantine/core';
import { useParams } from 'react-router';
import { Flame } from 'tabler-icons-react';
import useStyles from './ProductDetails.styles';
import products from '../../data/products.json';
import PricingInput from '../../components/PricingCard/PricingInput';
import Pricetag from '../../components/PricingCard/Pricetag';
import { useState } from 'react';

function ProductDetails() {
	const [quantity, setQuantity] = useState(1);
	const { classes } = useStyles();
	const { productId } = useParams();

	const product = products.find((product) => product.id === Number(productId));

	const features = product?.features.map((feature) => (
		<div key={feature.name}>
			<ThemeIcon
				size={44}
				radius="md"
				variant="gradient"
				gradient={{ deg: 135, from: 'primary', to: 'pink' }}
			>
				<Flame size={26} />
			</ThemeIcon>
			<Text size="lg" mt="sm" weight={500}>
				{feature.name}
			</Text>
			<Text color="dimmed" size="sm">
				{feature.description}
			</Text>
		</div>
	));

	return (
		<div className={classes.wrapper}>
			<Grid gutter={80}>
				<Col span={12} md={5}>
					<Title className={classes.title} order={2}>
						{product?.name}
					</Title>
					<Text color="dimmed">
						{product?.description}
					</Text>
					<Pricetag price={product?.price || 0} quantity={quantity}/>
					<PricingInput min={1} onValueChange={setQuantity}/>
				</Col>
				<Col span={12} md={7}>
					<SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
						{features}
					</SimpleGrid>
				</Col>
			</Grid>
		</div>
	);
}

export default ProductDetails;
