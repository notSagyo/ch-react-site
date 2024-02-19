import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChannelContext } from '../../context/ChannelContext';
import { useUserContext } from '../../context/UserContext';
import { iOpenChannel, iUser, sidenavIcons } from '../../types';
import { CHANNEL_URL } from '../../utils';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import UserCard from '../UserCard/UserCard';

export type ChannelBarLinkProps = Partial<SidenavLinkProps> & {
	channel: iOpenChannel,
	// Force update user data when open channels change, updating on "channel"
	// would be triggered before the ChannelsBar's Links mapping is done
	forcedUpdateTime?: number
}

function ChannelsBarLink({channel, forcedUpdateTime, ...props}: ChannelBarLinkProps) {
	const { activeChannel, getChannelByMembers, setLoading } = useChannelContext();
	const { activeUser, getUser } = useUserContext();
	const [remoteUser, setRemoteUser] = useState<iUser>();
	const [icon, setIcon] = useState<sidenavIcons>();
	const [label, setLabel] = useState('');
	const [photoUrl, setPhotoUrl] = useState(channel.photoUrl);
	const navigate = useNavigate();

	// Update links when the channelsBar's links change
	useEffect(() => {
		if (channel.type === 'user') {
			const remoteUserId = channel.membersIds.find(id => id !== activeUser.id) || activeUser.id;

			if (!props.icon) setIcon('User');
			if (!remoteUserId) return;

			getUser(remoteUserId).then((user) => {
				user && setLabel(user.name);
				setPhotoUrl(user?.photoURL);
				setRemoteUser(user);
			});
		} else if (channel.type === 'team') {
			setLabel(channel.label);
			setIcon('Users');
			setPhotoUrl(channel?.photoUrl);
		}
	}, [forcedUpdateTime]);

	const handleClick = () => {
		setLoading(true);
		if (channel.type === 'user') {
			getChannelByMembers(channel.membersIds)
				.then((channelRes) => navigate(`../${CHANNEL_URL}/${channelRes?.id}`))
				.catch(err => console.error(err));
		} else
			setTimeout(() => navigate(`../${CHANNEL_URL}/${channel.id}`), 0);
		setLoading(false);
	};

	return (
		<>
			<UserCard
				parent={
					<SidenavLink
						activeLink={activeChannel.id}
						{...props}
						linkId={props.linkId || channel.id}
						icon={props.icon || icon}
						photoUrl={photoUrl}
						label={label}
						onClick={props.onClick || handleClick}
					/>}
				user={remoteUser}
				channelId={channel.id}
				clickTrigger={'right'}
			/>
		</>
	);
}

export default ChannelsBarLink;
