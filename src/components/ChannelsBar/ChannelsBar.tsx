import { Group } from '@mantine/core';
import { Messages } from 'tabler-icons-react';
import { DivProps, iconsMap } from '../../utils';
import Sidenav, { SidenavPropsTabs } from '../Sidenav/Sidenav';
import useStyles from './ChannelsBar.styles';
import json from '../../json/channels.json';
import { SidenavLinkProps } from '../Sidenav/SidenavLink';

function ChannelsBar(props: DivProps) {
	const { classes, cx } = useStyles();
	const header = (<Group><Messages/>Inbox</Group>);

	// Pesadillas con TypeScript pt. 100
	let channels: SidenavPropsTabs = {  };
	for (const tab in json) {
		let recoveredTab: SidenavLinkProps[] = [];
		json[tab as keyof typeof json].forEach((channel) => {
			recoveredTab.push({ ...channel, icon: iconsMap.get(channel.icon) });
		});
		channels[tab] = recoveredTab;
	}

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

export default ChannelsBar;
