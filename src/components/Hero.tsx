import { Text, Group, Space, Button } from '@mantine/core';
import { classes } from '../utils';
import style from './Hero.module.scss';

function Hero() {
	return (
		<div className={style.hero}>
			<Group direction='column'>
				<Group>
					<h1 className={classes(style.title, style.fadeIn)}>
						Welcome to
						<Text
							component='span'
							className={style.brand}
							variant='gradient'
							gradient={{from: 'base', to: 'pink', deg: 135}}
							inherit
						> portfol.io </Text>
					</h1>
					<h2 className={classes(style.subtitle, style.fadeIn)}>
						Connect, create, learn, practice, grow.
					</h2>
				</Group>
				<Space h={'xl'} />
				<Group>
					<h3 className={classes(style.info, style.fadeIn)}>
						Connect with people
						<em className={style.infoStrong}> just like you</em>.
						Learn to work as part of a team.
						<br />
						Get first hand experience and show off the final result in your portfolio.
					</h3>
				</Group>
				<Space h={'xl'} />
				<Group className={classes(style.buttons, style.fadeIn)}>
					<Button
						size='xl'
						variant='gradient'
						radius={'lg'}
						gradient={{from: 'base', to: 'pink', deg: 135}}
					>Open app</Button>
				</Group>
			</Group>
		</div>
	);
}

export default Hero;
