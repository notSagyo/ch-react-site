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
	label?: string
}

// TODO: Update to work with team channels too
function ChannelsBarLink({membersIds, label, ...props}: ChannelBarLinkProps) {
	const { activeChannel, getChannelByMembers, setLoading, openChannels } = useChannelContext();
	const { activeUser, getUser } = useUserContext();
	const [remoteUser, setRemoteUser] = useState<iUser>();
	const [icon, setIcon] = useState<string>();
	const navigate = useNavigate();

	// Update links when active channel / latest opened channel changes
	useEffect(() => {
		if (activeChannel.type === 'user') {
			const remoteUserId = membersIds.find(id => id !== activeUser.id) || activeUser.id;
			if (!props.icon)
				setIcon('user');

			if (remoteUserId)
				getUser(remoteUserId).then((user) => setRemoteUser(user));
		}
	}, [activeChannel.id, openChannels[0]?.id]);

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
						photoUrl={props.photoUrl || remoteUser?.photoURL}
						label={label || remoteUser?.name}
						onClick={props.onClick || handleClick}
					/>}
				user={remoteUser || defaultUser}
			/>
		</>
	);
}

export default ChannelsBarLink;
