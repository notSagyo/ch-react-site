import Hero from '../../components/Hero/Hero';
import cn from 'classnames';
import styles from './Landing.module.scss';
import { DivProps } from '../../utils';

function Landing(props: DivProps) {
	return (
		<section {...props} className={cn(props.className, styles.hero)}>
			<Hero />
		</section>
	);
}

export default Landing;
