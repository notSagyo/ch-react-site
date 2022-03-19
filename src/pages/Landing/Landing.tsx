import Hero from '../../components/Hero/Hero';
import styles from './Landing.module.scss';

function Landing() {
	return (
		<section className={styles.hero}>
			<Hero />
		</section>
	);
}

export default Landing;
