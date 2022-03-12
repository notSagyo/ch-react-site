import { Text, Group, Space } from '@mantine/core';
import style from './hero.module.scss';

function Hero() {
	return (
		<section className={style.hero}>
			<Group className={style.content} direction="column">
				<Group>
					<h1 className={style.title}>
						Welcome to
						<Text
							component="span"
							className={style.brand}
							variant="gradient"
							gradient={{from: 'brand', to: 'pink', deg: 135}}
						> portfol.io </Text>
					</h1>
					<h2 className="h1">Connect, create, learn, practice, grow.</h2>
				</Group>
				<Space h={'xl'} />
				<Group>
					<h3 className={'h3 ' + style.info}>
						Connect with people just like you. Learn to work as part of a team.
						<Space h={'xl'} />
						Get first hand experience and show off the final result in your portfolio.
					</h3>
				</Group>
			</Group>
		</section>
	);
}

export default Hero;
