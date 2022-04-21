import { Text, Group, Button } from '@mantine/core';
import cn from 'classnames/bind';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils';
import styles from './Hero.module.scss';

function Hero() {
	return (
		<Group className={styles.hero} direction='column' sx={{gap: '2rem'}}>
			<Group>
				<h1 className={cn(styles.title, styles.fadeIn)}>
						Welcome to
					<Text
						component='span'
						className={styles.brand}
						variant='gradient'
						gradient={{from: 'primary', to: 'pink', deg: 135}}
						inherit
					> portfol.io </Text>
				</h1>
				<h2 className={cn(styles.subtitle, styles.fadeIn)}>
						Connect, create, practice, learn, grow.
				</h2>
			</Group>
			<Group>
				<h3 className={cn(styles.info, styles.fadeIn)}>
						Connect with people
					<em className={styles.infoStrong}> just like you</em>.
						Learn to work as part of a team.
					<br />
						Get first hand experience and show off the result in your portfolio.
				</h3>
			</Group>
			<Group className={cn(styles.buttons, styles.fadeIn)}>
				<Link to={`/${BASE_URL}/chat`}>
					<Button
						size='xl'
						variant='gradient'
						radius={'md'}
						gradient={{from: 'brand', to: 'pink', deg: 135}}
					>Open app</Button>
				</Link>
			</Group>
		</Group>
	);
}

export default Hero;
