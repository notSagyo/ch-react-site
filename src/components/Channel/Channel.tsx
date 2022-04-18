import { Group, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DivProps } from '../../types';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

function Channel(props: DivProps) {
	const [loading, setLoading] = useState(true);
	const { classes, cx } = useStyles();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			// !TODO: Change channel!!
			setLoading(false);
			// changeChannel(id).then(() => setLoading(false));
		} else
			setLoading(false);
	}, [id]);

	return (
		<Group {...props} className={cx(classes.channel, props.className)}>
			<MessagesWindow
				className={classes.messagesWindow}
				classNames={{root: classes.scrollRoot}}
				children={<LoadingOverlay visible={loading} radius='sm'/>}
			/>
			<MessageBar />
		</Group>
	);
}

export default Channel;
