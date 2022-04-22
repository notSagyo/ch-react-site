import { useChannelContext } from '../../context/ChannelContext';
import { useUserContext } from '../../context/UserContext';
import { CHANNEL_URL } from '../../utils';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import UserCard from '../UserCard/UserCard';

export type ChannelBarLinkProps = SidenavLinkProps & {
	membersId: number[],
	label?: string
}

// TODO: Update to work with team channels too
function ChannelsBarLink({membersId, ...props}: ChannelBarLinkProps) {
	const { activeChannel } = useChannelContext();
	const { activeUser } = useUserContext();

	// !TODO: CHANGE TO USE CONTEXT
	// const remoteUserId = membersId.find(id => id !== localUser.id) ?? localUser.id;
	// const remoteUser = getUser(remoteUserId);

	const link = `../${CHANNEL_URL}/`;

	return (
		<>
			<UserCard
				parent={<SidenavLink
					{...props}
					activeLink={activeChannel.id}
					link={link}
				/>}
				// avatar={remoteUser?.avatarURL}
				// banner={remoteUser?.bannerURL}
				// link={link}
				// name={remoteUser?.name}
				// occupation={remoteUser?.occupation }
			/>
		</>
	);
}

export default ChannelsBarLink;
