import { Group, Text, Anchor, Container } from '@mantine/core';
import { BrandFacebook, BrandInstagram, BrandTelegram, BrandTwitter, Mail } from 'tabler-icons-react';
import cn from 'classnames/bind';
import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.contentWrapper}>
				<Container className={cn('container', styles.content)}>
					{/* AUTHOR */}
					<Group className={styles.author} align='center'>
						<Anchor href='https://github.com/notSagyo'>© Boris Stecko - 2022</Anchor>
					</Group>

					{/* SOCIAL */}
					<Group className={styles.social} align='center'>
						<ul>
							<li><Anchor className={styles.socialIcon}><Mail/></Anchor></li>
							<li><Anchor className={styles.socialIcon}><BrandTelegram/></Anchor></li>
							<li><Anchor className={styles.socialIcon}><BrandTwitter/></Anchor></li>
							<li><Anchor className={styles.socialIcon}><BrandFacebook/></Anchor></li>
							<li><Anchor className={styles.socialIcon}><BrandInstagram/></Anchor></li>
						</ul>
					</Group>

					{/* LINKS */}
					<Group className={styles.links} align='center'>
						<Group align={'start'}>
							<ul>
								<li><Text className={styles.header}>Pricing</Text></li>
								<li><Anchor>Free</Anchor></li>
								<li><Anchor>Pro</Anchor></li>
								<li><Anchor>Pro+</Anchor></li>
							</ul>
							<ul>
								<li><Text className={styles.header}>Info</Text></li>
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
