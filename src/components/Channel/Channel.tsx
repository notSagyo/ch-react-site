import { Group } from '@mantine/core';
import { useState } from 'react';
import { DivProps } from '../../utils';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

function Channel({...props}: DivProps) {
	const [channelMessages, setChannelMessages] = useState<JSX.Element[]>([]);
	const { classes, cx } = useStyles();

	const pushMessage = (msg: JSX.Element) => {
		const updatedMessages = channelMessages.concat(msg);
		setChannelMessages(updatedMessages);
	};

	return (
		<Group {...props} className={cx(classes.channel, props.className)}>
			<MessagesWindow
				messages={channelMessages}
				className={classes.messages}
				classNames={{root: classes.scrollRoot}}
			/>
			<MessageBar pushMessage={pushMessage} />
		</Group>
	);
}

export default Channel;
