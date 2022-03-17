import { Anchor, Container } from '@mantine/core';
import { classList } from '../../utils';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Landing from '../Landing/Landing';
import style from './Home.module.scss';

function Home() {
	const logo = (
		<Anchor
			className={classList('hide-sm-up', style.logo)}
			color={''}
			variant='gradient'
			gradient={{from: 'brand', to: 'pink', deg: 135}}
		>portfol.io</Anchor>
	);

	return (
		<div className={style.home}>
			<Navbar logo={logo} />
			<Container
				className={style.mainWrapper}
				sx={(theme) => ({background: theme.black})}
				px={0}
				fluid
			>
				<main className={classList('container', style.main)}>
					<Landing />
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
