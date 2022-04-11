import Hero from '../../components/Hero/Hero';
import { DivProps } from '../../types';
import cn from 'classnames';
import styles from './Landing.module.scss';

function Landing(props: DivProps) {
	return (
		<section {...props} className={cn(props.className, styles.hero)}>
			<Hero />
		</section>
	);
}

export default Landing;
