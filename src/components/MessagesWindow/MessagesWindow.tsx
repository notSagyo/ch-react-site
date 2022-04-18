import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useChannelContext } from '../../context/ChannelContext';
import Message from '../Message/Message';
import useStyles from './MessagesWindow.styles';

function MessagesWindow({children, ...props}: ScrollAreaProps) {
	const { getMessages, activeChannel } = useChannelContext();
	const [msgList, setMsgList] = useState<JSX.Element[]>([]);

	const viewportRef = useRef<HTMLDivElement>(null);
	const { classes } = useStyles();

	useEffect(() => {
		getMessages(activeChannel.id).then((msgs) => {
			setMsgList(msgs?.map((msg, index) => (
				<Message message={msg} key={index}>{msg.content}</Message>
			)) || []);
		}).then(() => {
			viewportRef.current && viewportRef.current.scrollBy(0, 9999);
		});

	}, [activeChannel]);

	return (
		<ScrollArea
			{...props}
			viewportRef={viewportRef}
			classNames={{ viewport: classes.viewport }}
		>
			{children}
			<ol className={classes.messages}>{
				msgList.length > 0
					? msgList
					: <li>This is where I would put my messages... if I had any!!</li>
			}</ol>
		</ScrollArea>
	);
}

export default MessagesWindow;
