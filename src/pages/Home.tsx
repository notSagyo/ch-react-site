import { Container } from '@mantine/core';
import { classList } from '../utils';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import style from './Home.module.scss';
// ?TODO: Logo
// import logo from '/public/img/logo.svg';

function Home() {
	return (
		<div className={style.home}>
			<Container
				className={style.mainWrapper}
				sx={(theme) => ({background: theme.black})}
				fluid
			>
				<main className={classList('container', style.main)}>
					<Navbar /* logo={logo} */ />
					<section className={style.hero}>
						<Hero />
					</section>
				</main>
			</Container>
			<Footer />
		</div>
	);
}

export default Home;
