import { Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import { DivProps, isEmptyObject } from '../../utils';
import Message from '../Message/Message';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

type Props = DivProps & {
	currentChannel: string;
}

function Channel({currentChannel, ...props}: Props) {
	const [channelMessages, setChannelMessages] = useState<JSX.Element[]>([]);
	const { classes, cx } = useStyles();

	// PUSH MESSAGES ===========================================================//
	const pushMessage = (msg: JSX.Element) => {
		const updatedMessages = channelMessages.concat(msg);
		const messagesArray = updatedMessages.map((msg) => msg.props);
		localStorage.setItem(currentChannel, JSON.stringify(messagesArray));
		setChannelMessages(updatedMessages);
	};

	// LOAD MESSAGES ===========================================================//
	useEffect(() => {
		const storedMessages = localStorage.getItem(currentChannel);
		const parsedMessages = storedMessages ? JSON.parse(storedMessages) : {  };
		let restoredMessages: JSX.Element[] = [];

		if (typeof parsedMessages === 'object' && !isEmptyObject(parsedMessages)) {
			restoredMessages = Object.keys(parsedMessages).map((k) => {
				const props = parsedMessages[k];
				return (
					<Message
						children={props.children}
						channel={props.channel}
						author={props.author}
						time={props.time}
						key={props.time}
					/>);
			});
		}

		setChannelMessages(restoredMessages || []);
	}, [currentChannel]);

	// COMPONENT ===============================================================//
	return (
		<Group {...props} className={cx(classes.channel, props.className)}>
			<MessagesWindow
				classNames={{root: classes.scrollRoot}}
				className={classes.messages}
				messages={channelMessages}
			/>
			<MessageBar pushMessage={pushMessage} currentChannel={currentChannel} />
		</Group>
	);
}

export default Channel;
