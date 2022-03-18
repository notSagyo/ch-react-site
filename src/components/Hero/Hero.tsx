import { Text, Group, Button } from '@mantine/core';
import cn from 'classnames/bind';
import style from './Hero.module.scss';

function Hero() {
	return (
		<Group className={style.hero} direction='column' sx={{gap: '2rem'}}>
			<Group>
				<h1 className={cn(style.title, style.fadeIn)}>
						Welcome to
					<Text
						component='span'
						className={style.brand}
						variant='gradient'
						gradient={{from: 'brand', to: 'pink', deg: 135}}
						inherit
					> portfol.io </Text>
				</h1>
				<h2 className={cn(style.subtitle, style.fadeIn)}>
						Connect, create, practice, learn, grow.
				</h2>
			</Group>
			<Group>
				<h3 className={cn(style.info, style.fadeIn)}>
						Connect with people
					<em className={style.infoStrong}> just like you</em>.
						Learn to work as part of a team.
					<br />
						Get first hand experience and show off the final result in your portfolio.
				</h3>
			</Group>
			<Group className={cn(style.buttons, style.fadeIn)}>
				<Button
					size='xl'
					variant='gradient'
					radius={'lg'}
					gradient={{from: 'base', to: 'pink', deg: 135}}
				>Open app</Button>
			</Group>
		</Group>
	);
}

export default Hero;
