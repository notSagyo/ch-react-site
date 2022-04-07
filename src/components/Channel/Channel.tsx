import { Group, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChangeChannel } from '../../pages/Chat/ChatHelper';
import { DivProps } from '../../utils';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

function Channel(props: DivProps) {
	const [loading, setLoading] = useState(true);
	const changeChannel = useChangeChannel();
	const { classes, cx } = useStyles();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setLoading(true);
			changeChannel(id).then(() => setLoading(false));
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
