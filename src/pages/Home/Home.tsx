import { Anchor, Container } from '@mantine/core';
import cn from 'classnames/bind';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from '../Landing/Landing';
// import Pricing from '../Pricing/Pricing';
import style from './Home.module.scss';

function Home() {
	const logo = (
		<Anchor
			className={cn('hide-sm-up', style.logo)}
			color={''}
			variant='gradient'
			gradient={{from: 'brand', to: 'pink', deg: 135}}
		>portfol.io</Anchor>
	);

	return (
		<div className={style.home}>
			<Navbar logo={logo} className={style.nav} />
			<Container
				className={style.mainWrapper}
				sx={(theme) => ({background: theme.black})}
				px={0}
				fluid
			>
				<main className={cn('container', style.main)}>
					<Landing />
					{/* <Pricing /> */}
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
