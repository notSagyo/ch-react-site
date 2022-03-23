import { Group } from '@mantine/core';
import { Messages } from 'tabler-icons-react';
import { DivProps, iconsMap } from '../../utils';
import Sidenav, { SidenavPropsTabs } from '../Sidenav/Sidenav';
import useStyles from './ChannelsBar.styles';
import json from '../../json/channels.json';
import { SidenavLinkProps } from '../Sidenav/SidenavLink';

type Props = DivProps & {
	setCurrentChannel: (args: string) => void,
	defaultChannel?: string
}

function ChannelsBar({setCurrentChannel, defaultChannel, ...props}: Props) {
	const { classes, cx } = useStyles();
	const header = (<Group><Messages/>Inbox</Group>);

	// TODO: Move this to "Channels" component
	// Recover links tab from JSON | Pesadillas con TypeScript pt. 100
	const channels: SidenavPropsTabs = {  };
	for (const tab in json) {
		let recoveredTab: SidenavLinkProps[] = [];
		json[tab as keyof typeof json].forEach((channel) => {
			recoveredTab.push({ ...channel, icon: iconsMap.get(channel.icon) });
		});
		channels[tab] = recoveredTab;
	}

	function onChannelClick(link: SidenavLinkProps) {
		setCurrentChannel(link.label);
	}

	return (
		<Sidenav
			{...props}
			className={cx(classes.sidenav, props.className)}
			tabs={channels}
			header={header}
			onLinkClick={onChannelClick}
			defaultLink={defaultChannel}
		/>
	);
}

export default ChannelsBar;
