import { useEffect, useState } from 'react';
import { Title, SimpleGrid, Text, ThemeIcon, Grid, Col } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { Flame } from 'tabler-icons-react';
import useStyles from './ProductDetails.styles';
import PricingInput from '../../components/PricingCard/PricingInput';
import Pricetag from '../../components/PricingCard/Pricetag';
import { DivProps, iProduct } from '../../types';
import { useShopContext } from '../../context/ShopContext';

function ProductDetails(props: DivProps) {
	const [quantity, setQuantity] = useState(1);
	const [product, setProduct] = useState<iProduct>();
	const { getProduct } = useShopContext();
	const { classes } = useStyles();
	const { productId } = useParams();

	useEffect(() => {
		if (productId) {
			getProduct(productId).then((prod) => {
				setProduct(prod);
			});
		}
	}, [productId]);

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
		<div {...props}>
			{product && (
				<Grid gutter={80}>
					<Col span={12} md={5} className={classes.infoColumn}>
						<Title className={classes.title} order={2}>
							{product?.name}
						</Title>
						<Text color="dimmed">
							{product?.description}
						</Text>
						<Pricetag price={product?.price || 0} quantity={quantity}/>
						<PricingInput
							product={product}
							onValueChange={setQuantity}
							buttonLabel={product?.price == 0 ? 'Get it now >' : undefined}
							inputStyles={product?.price == 0 ? {display: 'none'} : undefined}
						/>
					</Col>
					<Col span={12} md={7}>
						<SimpleGrid cols={2} spacing={30} breakpoints={[{maxWidth: 'md', cols: 1}]}>
							{features}
						</SimpleGrid>
					</Col>
				</Grid>
			)}
		</div>
	);
}

export default ProductDetails;
