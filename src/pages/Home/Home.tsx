import { Anchor, Container } from '@mantine/core';
import cn from 'classnames/bind';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from '../Landing/Landing';
// import Pricing from '../Pricing/Pricing';
import styles from './Home.module.scss';

function Home() {
	const logo = (
		<Anchor
			className={cn('hide-sm-up', styles.logo)}
			color={''}
			variant='gradient'
			gradient={{from: 'brand', to: 'pink', deg: 135}}
		>portfol.io</Anchor>
	);

	return (
		<div className={styles.home}>
			<Navbar logo={logo} className={styles.nav} />
			<Container
				className={styles.mainWrapper}
				sx={(theme) => ({background: theme.black})}
				px={0}
				fluid
			>
				<main className={cn('container', styles.main)}>
					<Landing />
					{/* <Pricing /> */}
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
