import { Burger, Group, SegmentedControl, SegmentedControlItem } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Messages } from 'tabler-icons-react';
import { useChannelContext } from '../../context/ChannelContext';
import { DivProps } from '../../types';
import Sidenav from '../Sidenav/Sidenav';
import { UserButton } from '../UserButton/UserButton';
import useStyles from './ChannelsBar.styles';
import ChannelsBarLink from './ChannelsBarLink';

function ChannelsBar(props: DivProps) {
	const { openChannels, activeChannel } = useChannelContext();
	const [links, setLinks] = useState<JSX.Element[]>([<React.Fragment key={''}/>]);
	const [segments, setSegments] = useState<SegmentedControlItem[]>([]);
	const [section, setSection] = useState('');
	const [opened, setOpened] = useState(false);
	const { classes, cx } = useStyles({opened});

	// Create segments when the first "opened channel" changes
	useEffect(() => {
		const tabKeys = [...new Set(openChannels.map(channel => channel.type))]
			.sort((a, b) => b.localeCompare(a));

		if (tabKeys.length < 1)
			return;

		setSegments(tabKeys.map((tabName) => ({
			label: tabName.toUpperCase(),
			value: tabName
		})));

		setSection(tabKeys[activeChannel.type === 'user' ? 0 : 1]);
	}, [openChannels[0]?.id, activeChannel.id]);

	// Populate bar with channels' links
	useEffect(() => {
		setLinks(openChannels.map((channel, index) => {
			if (channel.type !== section) return <React.Fragment key={index}/>;
			return (<ChannelsBarLink
				key={index}
				channel={channel}
				forcedUpdateTime={Date.now()}
			/>);
		}));
	}, [segments, section]);

	return (
		<>
			<Burger 
				opened={opened} 
				onClick={() => setOpened((v) => !v)} 
				className={classes.burger}
			/>

			<Sidenav
				{...props}
				className={cx(classes.sidenav, props.className)}
				header={
					<Group>
						<Messages />
            Inbox
					</Group>
				}
				footer={<UserButton />}
				subheader={
					segments.length > 1 && (
						<SegmentedControl
							className={classes.controls}
							classNames={{
								label: classes.controlsLabel,
								active: classes.controlsActive,
							}}
							transitionTimingFunction='ease'
							onChange={setSection}
							value={section}
							data={segments}
							fullWidth
						/>
					)
				}
			>
				<div className={classes.links}> {links} </div>
			</Sidenav>
		</>
	);
}

export default ChannelsBar;
