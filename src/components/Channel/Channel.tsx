import { Group } from '@mantine/core';
import { DivProps } from '../../utils';
import MessageBar from '../MessageBar/MessageBar';
import MessagesWindow from '../MessagesWindow/MessagesWindow';
import useStyles from './Channel.styles';

function Channel(props: DivProps) {
	const { classes, cx } = useStyles();

	return (
		<Group {...props} className={cx(classes.channel, props.className)}>
			<MessagesWindow
				classNames={{root: classes.scrollRoot}}
				className={classes.messagesWindow}
			/>
			<MessageBar  />
		</Group>
	);
}

export default Channel;
