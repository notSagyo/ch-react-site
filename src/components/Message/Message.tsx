import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';
import { iMessage } from '../../types';
import useStyles from './Message.styles';

type MessageProps = HTMLAttributes<HTMLLIElement> & {
	message: iMessage
};

function Message({message, ...props}: MessageProps) {
	const { classes, cx } = useStyles();
	const timestamp = new Date(message.createdAt)
		.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});

	return (
		<li {...props} className={cx(classes.messageWrapper, props.className)}>
			<Text>
				<span className={classes.timestamp}> [{timestamp}] </span>
				<span className={classes.author}> {message.authorId}: </span>
				<span className={classes.content}>{props.children}</span>
			</Text>
		</li>
	);
}

export default Message;
