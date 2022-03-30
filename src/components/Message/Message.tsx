import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';
import { iMessage } from '../../types';
import useStyles from './Message.styles';

type MessageProps = HTMLAttributes<HTMLLIElement> & {
	message: iMessage
};

function Message({message, ...props}: MessageProps) {
	const { classes, cx } = useStyles();
	const timestamp = new Date(message.created)
		.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});

	return (
		<li {...props} className={cx(classes.messageWrapper, props.className)}>
			<Text>
				<span className={classes.timestamp}> [{timestamp}] </span>
				{message.userId}: {props.children}
			</Text>
		</li>
	);
}

export default Message;
