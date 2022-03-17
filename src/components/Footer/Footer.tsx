import { Group, Text, Anchor, Container } from '@mantine/core';
import { BrandFacebook, BrandInstagram, BrandTelegram, BrandTwitter, Mail } from 'tabler-icons-react';
import { classList } from '../../utils';
import style from './Footer.module.scss';

function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.contentWrapper}>
				<Container className={classList('container', style.content)}>
					{/* AUTHOR */}
					<Group className={style.author} align='center'>
						<Anchor href='https://github.com/notSagyo'>© Boris Stecko - 2022</Anchor>
					</Group>

					{/* SOCIAL */}
					<Group className={style.social} align='center'>
						<ul>
							<li><Anchor className={style.socialIcon}><Mail/></Anchor></li>
							<li><Anchor className={style.socialIcon}><BrandTelegram/></Anchor></li>
							<li><Anchor className={style.socialIcon}><BrandTwitter/></Anchor></li>
							<li><Anchor className={style.socialIcon}><BrandFacebook/></Anchor></li>
							<li><Anchor className={style.socialIcon}><BrandInstagram/></Anchor></li>
						</ul>
					</Group>

					{/* LINKS */}
					<Group className={style.links} align='center'>
						<Group align={'start'}>
							<ul>
								<li><Text className={style.header}>Pricing</Text></li>
								<li><Anchor>Free</Anchor></li>
								<li><Anchor>Pro</Anchor></li>
								<li><Anchor>Pro+</Anchor></li>
							</ul>
							<ul>
								<li><Text className={style.header}>Info</Text></li>
								<li><Anchor>Contact</Anchor></li>
								<li><Anchor>Legal</Anchor></li>
								<li><Anchor>About</Anchor></li>
							</ul>
						</Group>
					</Group>
				</Container>
			</div>
		</footer>
	);
}

export default Footer;
