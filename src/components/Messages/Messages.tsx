import { Box, Text } from '@mantine/core';
import { DivProps } from '../../utils';
import useStyles from './Messages.styles';

function Messages(props: DivProps) {
	const { classes, cx } = useStyles();
	return (
		<Box {...props} className={cx(classes.messages, props.className)}>
			<Text>
				This is where I would put my messages... if I had one!!
			</Text>
		</Box>
	);
}

export default Messages;
