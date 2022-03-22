import { Text } from '@mantine/core';
import { HTMLAttributes } from 'react';
import useStyles from './Message.styles';

type MessageProps = HTMLAttributes<HTMLLIElement> & {
	author: string,
	time: number
}

function Message({author, time, ...props}: MessageProps) {
	const { classes, cx } = useStyles();
	const timestamp = new Date(time)
		.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});

	return (
		<li {...props} className={cx(classes.messageWrapper, props.className)}>
			<Text>
				<span className={classes.timestamp}> [{timestamp}] </span>
				{author}: {props.children}
			</Text>
		</li>
	);
}

export default Message;
