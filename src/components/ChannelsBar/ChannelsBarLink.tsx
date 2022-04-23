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
function ChannelsBarLink({membersIds, ...props}: ChannelBarLinkProps) {
	const { activeChannel } = useChannelContext();
	const { activeUser, getUser } = useUserContext();

	const link = `../${CHANNEL_URL}/`;
	let remoteUser: iUser | undefined;
	if (activeChannel.type === 'user') {
		const remoteUserId = membersIds.find(id => id !== activeUser.id) || activeUser.id;
		if (remoteUserId) {
			getUser(remoteUserId).then((user) => remoteUser = user);
		}
	}

	return (
		<>
			<UserCard
				parent={<SidenavLink
					{...props}
					activeLink={activeChannel.id}
					link={link}
				/>}
				user={remoteUser || defaultUser}
			/>
		</>
	);
}

export default ChannelsBarLink;
