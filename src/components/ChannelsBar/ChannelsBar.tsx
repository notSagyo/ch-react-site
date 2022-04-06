import { Group, SegmentedControl, SegmentedControlItem } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Messages } from 'tabler-icons-react';
import { getChannels } from '../Channel/ChannelHelper';
import { iSidebarChannel } from '../../types';
import { DivProps } from '../../utils';
import ChannelsBarLink from './ChannelsBarLink';
import useStyles from './ChannelsBar.styles';
import Sidenav from '../Sidenav/Sidenav';

function ChannelsBar(props: DivProps) {
	const [channels, setChannels] = useState<{[key: string]: iSidebarChannel[]}>({});
	const [links, setLinks] = useState<JSX.Element[]>([<React.Fragment key={''}/>]);
	const [segments, setSegments] = useState<SegmentedControlItem[]>([]);
	const [section, setSection] = useState('');
	const { classes, cx } = useStyles();

	// Fetch channels
	useEffect(() => {
		getChannels().then(response => setChannels(response));
	}, []);

	// Create segments
	useEffect(() => {
		const tabKeys = Object.keys(channels);
		if (tabKeys.length < 1)
			return;

		setSegments(tabKeys.map((tabName) => ({
			label: tabName, value: tabName
		})));
		setSection(tabKeys[0]);
	}, [channels]);

	// Populate bar with channels' links
	useEffect(() => {
		section && setLinks(channels[section].map((channel, index) => (
			<ChannelsBarLink
				{...channel}
				key={index}
				linkId={channel.id}
				icon={channel.icon}
				membersId={channel.members}
			/>
		)));
	}, [section]);

	return (
		<Sidenav
			{...props}
			className={cx(classes.sidenav, props.className)}
			header={<Group><Messages/>Inbox</Group>}
			subheader={segments.length > 1 && (
				<SegmentedControl
					className={classes.controls}
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
			)}
		>
			<div className={classes.links}> {links} </div>
		</Sidenav>
	);
}

export default ChannelsBar;
