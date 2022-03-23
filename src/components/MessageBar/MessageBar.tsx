import { TextInput } from '@mantine/core';
import { FormEvent, HTMLAttributes, useRef } from 'react';
import { Message as MessageIcon } from 'tabler-icons-react';
import Message from '../Message/Message';
import useStyles from './MessageBar.styles';

type MessageBarProps = { pushMessage: (msg: JSX.Element) => void }
type Props = MessageBarProps & HTMLAttributes<HTMLFormElement> & {
	currentChannel: string
}

function MessageBar({currentChannel, pushMessage, onSubmit, ...props}: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	const { classes, cx } = useStyles();

	function sendMessage (event: FormEvent) {
		event.preventDefault();
		if (!inputRef.current) return ('');
		const content = inputRef.current.value;

		if (!content) return ('');
		const now = Date.now();

		inputRef.current.value = '';
		pushMessage(<Message
			channel={currentChannel}
			children={content}
			author='User'
			time={now}
			key={now}
		/>);
	}

	return (
		<form action={void(0)} className={classes.form} onSubmit={sendMessage}>
			<TextInput
				icon={<MessageIcon className={classes.placeholderIcon} />}
				className={cx(props.className, classes.textInput)}
				classNames={{input: classes.inputInner}}
				placeholder='Write a message...'
				autoComplete='off'
				ref={inputRef}
			/>
		</form>
	);
}

export default MessageBar;
