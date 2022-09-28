import { Container, Text } from '@mantine/core';
import cn from 'classnames';
import { Link, matchPath, Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { BASE_URL } from '../../utils';
import Cart from '../Cart/Cart';
import Error404 from '../Error/Error404';
import Landing from '../Landing/Landing';
import Pricing from '../Pricing/Pricing';
import ProductDetails from '../ProductDetails/ProductDetails';
import styles from './Home.module.scss';

function Home() {
	const currentURL = useLocation().pathname;

	const logo = !matchPath(currentURL, `/${BASE_URL}`) ? (
		<Link to={`../${BASE_URL}`}>
			<Text
				className={styles.logo}
				style={{display:
						(matchPath(currentURL, `/${BASE_URL}`)) ? 'none' : 'visible'}}
				color={''}
				variant='gradient'
				gradient={{from: 'primary', to: 'pink', deg: 135}}
			>portfol.io</Text>
		</Link>
	) : '';

	return (
		<div className={styles.home}>
			<Navbar logo={logo} className={styles.nav} />
			<Container
				className={styles.mainWrapper}
				sx={(theme) => ({background: theme.colors.dark[7]})}
				px={0}
				fluid
			>
				<main className={cn('container', styles.main)}>
					<Routes>
						<Route path='/' element={<Landing className={styles.mainSection} />} />
						<Route path='cart' element={<Cart className={styles.mainSection} />} />
						{/* // ?TODO: unify these 2 rutes */}
						<Route path='pricing/' element={<Pricing className={styles.mainSection} />} />
						<Route path='pricing/:productCategory' element={<Pricing className={styles.mainSection} />} />
						<Route path={'pricing/:productCategory/details/:productId'} element={<ProductDetails className={styles.mainSection} />} />
						<Route path={'*'} element={<Error404 />}/>
					</Routes>
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
