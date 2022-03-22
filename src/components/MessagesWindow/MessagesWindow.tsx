import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { useEffect, useRef } from 'react';
import useStyles from './MessagesWindow.styles';

type MessagesProps = { messages: JSX.Element[] }
type Props = MessagesProps & ScrollAreaProps;

function MessagesWindow({messages, ...props}: Props ) {
	const viewportRef = useRef<HTMLDivElement>(null);
	const { classes, cx } = useStyles();

	useEffect(() => {
		viewportRef.current && viewportRef.current.scrollBy(0, 999);
	}, [messages]);

	// FIXME: scrollbar showing on initial load
	return (
		<ScrollArea
			{...props}
			viewportRef={viewportRef}
			classNames={{ viewport: classes.viewport }}
		>
			<ol className={classes.messages}>{
				messages.length > 0
					? messages
					:'This is where I would put my messages... if I had any!!'
			}</ol>
		</ScrollArea>
	);
}

export default MessagesWindow;
