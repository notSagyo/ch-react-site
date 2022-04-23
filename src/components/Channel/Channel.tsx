import { Group, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useChannelContext } from '../../context/ChannelContext';
import { DivProps } from '../../types';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

function Channel(props: DivProps) {
	const { changeChannel } = useChannelContext();
	const [ loading, setLoading ] = useState(false);
	const { classes, cx } = useStyles();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			setLoading(true);
			changeChannel(id)
				.catch((err) => console.error(err))
				.finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
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
