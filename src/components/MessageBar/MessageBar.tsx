import { TextInput } from '@mantine/core';
import { Message } from 'tabler-icons-react';
import { DivProps } from '../../utils';
import useStyles from './MessageBar.styles';

function MessageBar(props: DivProps) {
	const { classes, cx } = useStyles();

	return (
		<TextInput
			classNames={{input: classes.inputInner}}
			placeholder='Write a message...'
			icon={<Message className={classes.placeholderIcon} />}
			{...props}
			className={cx(props.className, classes.textInput)}></TextInput>
	);
}

export default MessageBar;
