import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { MessageListState } from '../../pages/Chat/ChatHelper';
import Message from '../Message/Message';
import useStyles from './MessagesWindow.styles';

function MessagesWindow(props: ScrollAreaProps) {
	const [messageList] = useRecoilState(MessageListState);
	const viewportRef = useRef<HTMLDivElement>(null);
	const { classes } = useStyles();

	useEffect(() => {
		viewportRef.current && viewportRef.current.scrollBy(0, 999);
	}, [messageList]);

	const messages = messageList.map((msg, index) => (
		<Message message={msg} key={index}>{msg.content}</Message>
	));

	return (
		<ScrollArea
			{...props}
			viewportRef={viewportRef}
			classNames={{ viewport: classes.viewport }}
		>
			<ol className={classes.messages}>{
				messages.length > 0
					? messages
					: <li>This is where I would put my messages... if I had any!!</li>
			}</ol>
		</ScrollArea>
	);
}

export default MessagesWindow;
