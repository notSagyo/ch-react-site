import { Link, matchPath, Route, Routes, useLocation } from 'react-router-dom';
import { Anchor, Container } from '@mantine/core';
import { BASE_URL } from '../../utils';
import cn from 'classnames/bind';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from '../Landing/Landing';
import Pricing from '../Pricing/Pricing';
import styles from './Home.module.scss';
import ProductDetails from '../ProductDetails/ProductDetails';
import Cart from '../Cart/Cart';
import Error404 from '../Error/Error404';

function Home() {
	const currentURL = useLocation().pathname;

	const logo = (
		<Link to={`../${BASE_URL}`} >
			<Anchor
				className={styles.logo}
				style={{visibility:
					(matchPath(currentURL, `/${BASE_URL}`)) ? 'hidden' : 'visible'}}
				color={''}
				variant='gradient'
				gradient={{from: 'primary', to: 'pink', deg: 135}}
			>portfol.io</Anchor>
		</Link>
	);

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
						<Route path='cart' element={<Cart />}/>
						{/* // ?TODO: unify these 2 rutes */}
						<Route path='pricing/' element={<Pricing className={styles.mainSection} />} />
						<Route path='pricing/:productCategory' element={<Pricing className={styles.mainSection} />} />
						<Route path={'pricing/:productCategory/details/:productId'} element={<ProductDetails />} />
						<Route path={'*'} element={<Error404 />}/>
					</Routes>
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
