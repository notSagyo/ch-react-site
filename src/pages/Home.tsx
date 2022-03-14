import { classes } from '../utils';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import style from './Home.module.scss';

function Home() {
	return (
		<div className={style.main}>
			<main className={classes('container', style.main)}>
				<Navbar />
				<section className={style.hero}>
					<Hero />
				</section>
			</main>
			<div className={style.footer}>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
