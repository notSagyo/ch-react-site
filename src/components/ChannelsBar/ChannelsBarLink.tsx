import { useRecoilState } from 'recoil';
import { ActiveChannelState, CurrentUserState, getUser } from '../../pages/Chat/ChatHelper';
import { CHANNEL_URL } from '../../utils';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import UserCard from '../UserCard/UserCard';

export type ChannelBarLinkProps = SidenavLinkProps & {
	membersId: number[],
	label?: string
}

// TODO: Update to work with team channels too
function ChannelsBarLink({membersId, ...props}: ChannelBarLinkProps) {
	const [localUser] = useRecoilState(CurrentUserState);
	const [activeChannel] = useRecoilState(ActiveChannelState);

	const remoteUserId = membersId.find(id => id !== localUser.id) ?? localUser.id;
	const remoteUser = getUser(remoteUserId);

	const link = `../${CHANNEL_URL}/${remoteUser && remoteUser.id}`;

	return (
		<>
			<UserCard
				parent={<SidenavLink
					{...props}
					activeLink={activeChannel.id}
					link={link}
				/>}
				avatar={remoteUser?.avatarURL}
				banner={remoteUser?.bannerURL}
				link={link}
				name={remoteUser?.name}
				occupation={remoteUser?.occupation }
			/>
		</>
	);
}

export default ChannelsBarLink;
