import { Box, Group, SegmentedControl, SegmentedControlItem } from '@mantine/core';
import React from 'react';
import { useEffect, useState } from 'react';
import { Messages } from 'tabler-icons-react';
import { iSidebarChannel } from '../../types';
import { DivProps } from '../../utils';
import { getChannels } from '../Channel/ChannelHelper';
import Sidenav from '../Sidenav/Sidenav';
import SidenavLink from '../Sidenav/SidenavLink';
import useStyles from './ChannelsBar.styles';
import ChannelsBarLink from './ChannelsBarLink';

function ChannelsBar(props: DivProps) {
	const { classes, cx } = useStyles();
	const [channels, setChannels] = useState<{[key: string]: iSidebarChannel[]}>({});

	const [activeLink] = useState('');
	const [segments, setSegments] = useState<SegmentedControlItem[]>([]);
	const [links, setLinks] = useState<JSX.Element[]>([<React.Fragment key={''}/>]);
	const [section, setSection] = useState('');

	useEffect(() => {
		setTimeout(() => {
			getChannels().then(response => {
				setChannels(response);
			});
		}, 2000);
	}, []);

	useEffect(() => {
		const tabKeys = Object.keys(channels);
		if (tabKeys.length < 1)
			return;

		setSegments(tabKeys.map((tabName) => ({
			label: tabName, value: tabName
		})));
		setSection(tabKeys[0]);
	}, [channels]);

	useEffect(() => {
		section && setLinks(channels[section].map((item, index) => (
			<ChannelsBarLink
				{...item}
				key={index}
				activeLink={activeLink}
				icon={item.icon}
				membersId={item.members}
			/>
		)));
	}, [section]);

	return (
		<Sidenav
			{...props}
			className={cx(classes.sidenav, props.className)}
			header={<Group><Messages/>Inbox</Group>}
			subheader={segments.length > 1 && (
				<Box className={classes.controls}>
					<SegmentedControl
						classNames={{
							label: classes.controlsLabel,
							active: classes.controlsActive
						}}
						transitionTimingFunction="ease"
						onChange={setSection}
						value={section}
						data={segments}
						fullWidth
					/>
				</Box>
			)}
		>
			<div className={classes.links}> {links} </div>
		</Sidenav>
	);
}

export default ChannelsBar;
