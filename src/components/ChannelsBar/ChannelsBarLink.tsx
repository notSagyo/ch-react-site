import { getUser } from '../../pages/Chat/ChatHelper';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import UserCard from '../UserCard/UserCard';

export type ChannelBarLinkProps = SidenavLinkProps & {
	membersId: string[],
	label?: string
}

function ChannelsBarLink({membersId, label, ...props}: ChannelBarLinkProps) {
	const user = getUser(membersId[0]);

	return (
		<>
			<UserCard
				parent={<SidenavLink {...props} label={label} />}
				avatar={user?.avatarURL}
				banner={user?.bannerURL}
				name={user?.name}
				occupation={user?.occupation }
			/>
		</>
	);
}

export default ChannelsBarLink;
