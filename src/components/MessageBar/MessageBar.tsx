import { Textarea } from '@mantine/core';
import { HTMLAttributes, useRef } from 'react';
import { Message as MessageIcon } from 'tabler-icons-react';
import { usePushMessage } from '../../pages/Chat/ChatHelper';
import useStyles from './MessageBar.styles';
import { validateMessage } from './MessageBarHelper';

function MessageBar(props: HTMLAttributes<HTMLFormElement>) {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const pushMessage = usePushMessage();
	const { classes, cx } = useStyles();

	function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		if (!(e.key === 'Enter' && !e.shiftKey) || !inputRef.current)
			return;

		const validatedMessage = validateMessage(inputRef.current.value);
		validatedMessage && pushMessage(validatedMessage);

		inputRef.current.value = '';
		e.preventDefault();
	}

	return (
		<form action={void(0)} className={classes.form}>
			<Textarea
				icon={<MessageIcon className={classes.placeholderIcon} />}
				className={cx(props.className, classes.textInput)}
				classNames={{input: classes.inputInner}}
				placeholder='Write a message...'
				onKeyDown={handleKeyDown}
				autoComplete='off'
				ref={inputRef}
				minRows={1}
				maxRows={10}
				autosize
			/>
		</form>
	);
}

export default MessageBar;
