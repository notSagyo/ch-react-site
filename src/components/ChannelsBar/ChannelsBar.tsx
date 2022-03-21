import { Group } from '@mantine/core';
import { Messages, User, Users } from 'tabler-icons-react';
import { DivProps } from '../../utils';
import Sidenav, { SidenavPropsTabs } from '../Sidenav/Sidenav';
import useStyles from './ChannelsBar.styles';

const channels: SidenavPropsTabs = {
	'USERS': [
		{ label: 'Marito Baracus', icon: User },
		{ label: 'Gaspi', icon: User, },
		{ label: 'Juli3p', icon: User },
		{ label: 'El Maestruli', icon: User, },
		{ label: 'Macaulay Culkin', icon: User, },
	],
	'TEAMS': [
		{ label: 'SKT T1', icon: Users },
		{ label: 'Cloud9', icon: Users },
		{ label: 'SSG', icon: Users },
		{ label: 'TSM', icon: Users },
		{ label: 'Team Liquid', icon: Users },
	]
};

function Channels(props: DivProps) {
	const { classes, cx } = useStyles();
	const header = (<Group><Messages/>Inbox</Group>);

	return (
		<Sidenav
			{...props}
			className={cx(classes.sidenav, props.className)}
			tabs={channels}
			defaultLink='Notifications'
			header={header}
		/>
	);
}

export default Channels;
