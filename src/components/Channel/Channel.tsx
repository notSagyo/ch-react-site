import { Group } from '@mantine/core';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useChangeChannel } from '../../pages/Chat/ChatHelper';
import { DivProps } from '../../utils';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

function Channel(props: DivProps) {
	const { classes, cx } = useStyles();
	const changeChannel = useChangeChannel();
	const { id } = useParams();

	useEffect(() => {
		id && changeChannel(id);
	}, [id]);

	return (
		<Group {...props} className={cx(classes.channel, props.className)}>
			<MessagesWindow
				classNames={{root: classes.scrollRoot}}
				className={classes.messagesWindow}
			/>
			<MessageBar />
		</Group>
	);
}

export default Channel;
