import Hero from '../../components/Hero/Hero';
import style from './Landing.module.scss';

function Landing() {
	return (
		<section className={style.hero}>
			<Hero />
		</section>
	);
}

export default Landing;
