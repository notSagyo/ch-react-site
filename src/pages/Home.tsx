import { Container } from '@mantine/core';
import { classList } from '../utils';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import style from './Home.module.scss';

function Home() {
	return (
		<div className={style.home}>
			<Container
				className={style.mainWrapper}
				sx={(theme) => ({background: theme.black, boxShadow: theme.shadows.md})}
				fluid
			>
				<main className={classList('container', style.main)}>
					<Navbar />
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
