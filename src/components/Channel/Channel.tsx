import { Group } from '@mantine/core';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { ActiveChannelState } from '../../pages/Chat/ChatHelper';
import { DivProps } from '../../utils';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';
import { getChannel } from './ChannelHelper';

function Channel(props: DivProps) {
	const { classes, cx } = useStyles();
	const setCurrentChannel = useSetRecoilState(ActiveChannelState);
	const { id } = useParams();

	useEffect(() => {
		id && getChannel(id)
			.then(channel => channel && setCurrentChannel(channel));
		console.log('Channel:', id);
	}, [id]);

	return (
		<Group {...props} className={cx(classes.channel, props.className)}>
			<MessagesWindow
				classNames={{root: classes.scrollRoot}}
				className={classes.messagesWindow}
			/>
			<MessageBar  />
		</Group>
	);
}

export default Channel;
