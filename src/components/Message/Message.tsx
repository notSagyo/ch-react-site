import { Anchor, Text } from '@mantine/core';
import { HTMLAttributes, useEffect, useState } from 'react';
import { useChannelContext } from '../../context/ChannelContext';
import { useUserContext } from '../../context/UserContext';
import { iMessage, iUser } from '../../types';
import UserCard from '../UserCard/UserCard';
import useStyles from './Message.styles';

type MessageProps = HTMLAttributes<HTMLLIElement> & {
	message: iMessage
};

function Message({message, ...props}: MessageProps) {
	const [ author, setAuthor ] = useState<iUser | undefined>();
	const { getUser } = useUserContext();
	const { classes, cx } = useStyles();

	const timestamp = new Date(message.createdAt)
		.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});

	useEffect(() => {
		getUser(message.authorId).then((user) => setAuthor(user));
	}, [message]);

	return (
		<li {...props} className={cx(classes.messageWrapper, props.className)}>
			<Text>
				<span className={classes.timestamp}> [{timestamp}] </span>
				<UserCard
					clickTrigger='both'
					inline={true}
					user={author}
					parent={
						<Anchor className={classes.author} >
							{message.authorName || 'Guest'}:
						</Anchor>}
				/>
				<span className={classes.content}> {props.children}</span>
			</Text>
		</li>
	);
}

export default Message;
