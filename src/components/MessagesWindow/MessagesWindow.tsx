import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useChannelContext } from '../../context/ChannelContext';
import { defaultUser } from '../../pages/Chat/ChatHelper';
import Message from '../Message/Message';
import useStyles from './MessagesWindow.styles';

function MessagesWindow({children, ...props}: ScrollAreaProps) {
	const [msgList, setMsgList] = useState<JSX.Element[]>([]);
	const scrollRef = useRef<HTMLDivElement>(null);
	const { activeChannel, createChannel, getMembers } = useChannelContext();
	const { classes } = useStyles();

	// Update msg list on current channel messages' update
	useEffect(() => {
		setMsgList(activeChannel.messages.map((msg, index) => (
			<Message message={msg} key={index}>{msg.content}</Message>
		)));
	}, [activeChannel.messages]);

	// Scroll to bottom on new messages
	useEffect(() => {
		scrollRef?.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: 'smooth'
		});
	}, [msgList]);

	return (
		<ScrollArea
			{...props}
			viewportRef={scrollRef}
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
