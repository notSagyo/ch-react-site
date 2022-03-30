import { Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Messages } from 'tabler-icons-react';
import { DivProps } from '../../utils';
import { getChannels } from '../Channel/ChannelHelper';
import Sidenav from '../Sidenav/Sidenav';
import useStyles from './ChannelsBar.styles';

function ChannelsBar(props: DivProps) {
	const { classes, cx } = useStyles();
	const [channels, setChannels] = useState({tab: []});
	const header = (<Group><Messages/>Inbox</Group>);

	useEffect(() => {
		getChannels().then(response => {
			setChannels(response);
		});
	}, []);

	return (
		<Sidenav
			{...props}
			className={cx(classes.sidenav, props.className)}
			tabs={channels}
			header={header}
		/>
	);
}

export default ChannelsBar;
