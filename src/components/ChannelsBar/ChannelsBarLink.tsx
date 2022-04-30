import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChannelContext } from '../../context/ChannelContext';
import { useUserContext } from '../../context/UserContext';
import { defaultUser } from '../../pages/Chat/ChatHelper';
import { iUser } from '../../types';
import { CHANNEL_URL } from '../../utils';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import UserCard from '../UserCard/UserCard';

export type ChannelBarLinkProps = SidenavLinkProps & {
	membersIds: string[],
	label?: string,
	// Force update user data when open channels change, updating on "openChannels"
	// state change would be triggered before the ChannelsBar mapping is done
	forcedUpdateTime?: number
}

// TODO: Update to work with team channels too
function ChannelsBarLink({membersIds, label, forcedUpdateTime, ...props}: ChannelBarLinkProps) {
	const { activeChannel, getChannelByMembers, setLoading } = useChannelContext();
	const { activeUser, getUser } = useUserContext();
	const [remoteUser, setRemoteUser] = useState<iUser>();
	const [icon, setIcon] = useState<string>();
	const navigate = useNavigate();

	// Update links when the channelsBar's links change
	useEffect(() => {
		if (activeChannel.type === 'user') {
			const remoteUserId = membersIds.find(id => id !== activeUser.id) || activeUser.id;

			if (!props.icon)
				setIcon('user');

			if (remoteUserId)
				getUser(remoteUserId).then((user) => setRemoteUser(user));
		}
	}, [forcedUpdateTime]);

	const handleClick = () => {
		if (!remoteUser) return;
		setLoading(true);
		getChannelByMembers(membersIds)
			.then((channel) => navigate(`../${CHANNEL_URL}/${channel?.id}`))
			.finally(() => setLoading(false));
	};

	return (
		<>
			<UserCard
				parent={
					<SidenavLink
						activeLink={activeChannel.id}
						{...props}
						icon={props.icon || icon}
						photoUrl={remoteUser?.photoURL}
						label={remoteUser?.name}
						onClick={props.onClick || handleClick}
					/>}
				user={remoteUser || defaultUser}
				clickTrigger={'right'}
			/>
		</>
	);
}

export default ChannelsBarLink;
