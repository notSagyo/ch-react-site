import { useClickOutside } from '@mantine/hooks';
import { useEffect, useRef, useState } from 'react';
import { getUser } from '../../pages/Chat/ChatHelper';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import { UserCard, UserCardProps } from '../UserCard/UserCard';
import useStyles from './ChannelsBarLink.styles';

export type ChannelBarLinkProps = SidenavLinkProps & {
	membersId: string[],
	label?: string
}

function ChannelsBarLink({membersId, label, ...props}: ChannelBarLinkProps) {
	const [isCardOpen, setIsCardOpen] = useState(false);
	const [userCard, setUserCard] = useState<UserCardProps>({
		avatar: '',
		banner: '',
		name: '',
		occupation: '',
		stats: []
	});
	const outsideRef = useClickOutside(() => hideCard());
	const card = useRef<HTMLDivElement>(null);
	const user = getUser(membersId[0]);
	const { classes } = useStyles();

	// TODO: add missing properties
	useEffect(() => {
		if (user) {
			!label && (label = user.name);
			setUserCard({
				...userCard,
				name: user.name,
				avatar: user.avatarURL,
				occupation: user.occupation,
				banner: user.bannerURL,
			});
		}
	}, []);

	function handleContextMenu(e: React.MouseEvent<HTMLAnchorElement>) {
		if (card.current) {
			card.current.style.visibility = 'visible';
			card.current.style.top = `${e.clientY}px`;
			card.current.style.left = `${e.clientX}px`;
			setIsCardOpen(true);
		}
		e.preventDefault();
	}

	function hideCard() {
		if (isCardOpen) {
			card.current && (card.current.style.visibility = 'hidden');
			setIsCardOpen(false);
		}
	}

	return (
		<>
			<SidenavLink {...props} label={label} onContextMenu={handleContextMenu} />
			<div ref={outsideRef}>
				<UserCard
					avatar={userCard.avatar}
					banner={userCard.banner}
					name={userCard.name}
					occupation={userCard.occupation }
					stats={userCard.stats}
					innerRef={card}
					className={classes.card}
				/>
			</div>
		</>
	);
}

export default ChannelsBarLink;
