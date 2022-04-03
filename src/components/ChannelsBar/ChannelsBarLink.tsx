import { useRecoilState } from 'recoil';
import { ActiveChannelState, getUser } from '../../pages/Chat/ChatHelper';
import SidenavLink, { SidenavLinkProps } from '../Sidenav/SidenavLink';
import UserCard from '../UserCard/UserCard';

export type ChannelBarLinkProps = SidenavLinkProps & {
	membersId: string[],
	label?: string
}

function ChannelsBarLink({membersId, ...props}: ChannelBarLinkProps) {
	const [activeChannel] = useRecoilState(ActiveChannelState);
	const user = getUser(membersId[0]);

	return (
		<>
			<UserCard
				parent={<SidenavLink {...props} activeLink={activeChannel.id}/>}
				avatar={user?.avatarURL}
				banner={user?.bannerURL}
				name={user?.name}
				occupation={user?.occupation }
			/>
		</>
	);
}

export default ChannelsBarLink;
